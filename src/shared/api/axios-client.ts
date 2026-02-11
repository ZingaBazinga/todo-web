import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

/**
 * Subset of AxiosRequestConfig
 */
export type RequestConfig<TData = unknown> = {
    baseURL?: string;
    url?: string;
    method: "GET" | "PUT" | "PATCH" | "POST" | "DELETE" | "OPTIONS";
    params?: unknown;
    data?: TData | FormData;
    responseType?:
        | "arraybuffer"
        | "blob"
        | "document"
        | "json"
        | "text"
        | "stream";
    signal?: AbortSignal;
    headers?: AxiosRequestConfig["headers"];
};
/**
 * Subset of AxiosResponse
 */
export type TResponseConfig<TData = unknown> = {
    data: TData;
    status: number;
    statusText: string;
    headers: AxiosResponse["headers"];
};

export type TErrorStruct = {
    /**
     * @type integer | undefined
     */
    error_code?: number;
    /**
     * @type string | undefined
     */
    error_message?: string;
};

export interface IErrorStructWithValidationErrors extends TErrorStruct {
    validation_errors?: {
        error_message: string;
        field_key: string;
    }[];
}

export type ResponseErrorConfig<TError = IErrorStructWithValidationErrors> =
    TError;

export const AXIOS_INSTANCE = axios.create({
    baseURL: "http://localhost:8080/",
    withCredentials: true,
});

// Пробрасывает ошибки дальше для обработки в catch
AXIOS_INSTANCE.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        // Мб в будущем сюда можно добавить логирование ошибок
        return Promise.reject(error);
    },
);

const UNKNOWN_ERROR = {
    error_code: 7355608,
    error_message: "Server unknown error",
};

export const axiosClient = async <
    TData,
    TError = unknown,
    TVariables = unknown,
>(
    config: RequestConfig<TVariables>,
): Promise<TResponseConfig<TData>> => {
    const promise = AXIOS_INSTANCE.request<TData, TResponseConfig<TData>>(
        config,
    ).catch((error: AxiosError<TError>) => {
        throw error.response?.data ?? UNKNOWN_ERROR;
    });

    return promise;
};
