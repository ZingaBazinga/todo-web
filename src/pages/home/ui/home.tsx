import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styles from "./home.module.scss";
import { taskApi } from "@/entities/task/api/api";

export const Home = () => {
    // Access the client
    const queryClient = useQueryClient();

    // Queries
    const query = useQuery({ queryKey: ["todos"], queryFn: taskApi.getTasks });

    // Mutations
    const mutation = useMutation({
        mutationFn: taskApi.createTask,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
    return (
        <>
            <input
                className={styles.input}
                type="text"
                placeholder="Добавь задачу"
            />
            <ul className={styles.list}>
                <li className={styles["list-item"]}>
                    <input
                        className={styles["list-item--checkbox"]}
                        type="checkbox"
                    />
                    <span className={styles["list-item--text"]}>
                        Sample Task 1
                    </span>
                </li>
                <li className={styles["list-item"]}>
                    <input
                        className={styles["list-item--checkbox"]}
                        type="checkbox"
                    />
                    <span className={styles["list-item--text"]}>
                        Sample Task 2
                    </span>
                </li>
            </ul>
        </>
    );
};
