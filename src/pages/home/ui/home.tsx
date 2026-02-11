import styles from "./home.module.scss";

export const Home = () => {
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
