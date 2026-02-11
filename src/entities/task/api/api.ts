import { axiosClient } from "@/shared/api/axios-client";

export const taskApi = {
    getTasks: () => {
        return axiosClient({
            method: "GET",
            url: "/tasks",
        });
    },
    createTask: (title: string) => {
        return axiosClient({
            method: "POST",
            url: "/tasks",
            data: { title },
        });
    },
    updateTask: (id: number, title: string, completed: boolean) => {
        return axiosClient({
            method: "PUT",
            url: `/tasks/${id}`,
            data: { title, completed },
        });
    },
    deleteTask: (id: number) => {
        return axiosClient({
            method: "DELETE",
            url: `/tasks/${id}`,
        });
    },
};
