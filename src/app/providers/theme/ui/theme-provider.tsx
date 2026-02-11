import { type ReactNode, useEffect, useState } from "react";

import { type Theme, ThemeContext } from "@/shared/hooks/use-theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
        // const apply = (isDark: boolean) => setTheme(isDark ? "dark" : "light");
        const apply = (isDark: boolean) => setTheme("light");

        if (mql) apply(mql.matches);

        const handler = (event: MediaQueryListEvent) => apply(event.matches);
        mql?.addEventListener?.("change", handler);

        return () => {
            mql?.removeEventListener?.("change", handler);
        };
    }, []);

    useEffect(() => {
        if (typeof document === "undefined") return;
        const body = document.body;
        const other: Theme = theme === "dark" ? "light" : "dark";
        body.classList.add(theme);
        body.classList.remove(other);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};
