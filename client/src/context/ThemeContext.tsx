import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { ThemeContextTypes } from "../utils/types";

const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);

type Props = { children: ReactNode };

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) {
      localStorage.setItem("theme", "dark");
      return "dark";
    }
    return localTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) 
        throw new Error('useTheme must be used within an ThemeProvider');
    return context;
}