import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

type ThemeContextProps = { theme: Theme };

export const ThemeContext = createContext<ThemeContextProps | undefined>(
    undefined,
);

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
