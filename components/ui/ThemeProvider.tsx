"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_KEY = "theme";
const listeners = new Set<() => void>();

const emptySubscribe = () => () => {};

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  const mediaListener = () => callback();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", mediaListener);
  return () => {
    listeners.delete(callback);
    window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", mediaListener);
  };
}

function getClientTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerTheme(): Theme {
  return "dark";
}

function setStoredTheme(theme: Theme) {
  localStorage.setItem(THEME_KEY, theme);
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
  listeners.forEach((l) => l());
}

function getMounted(): boolean {
  return true;
}

function getServerMounted(): boolean {
  return false;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getClientTheme, getServerTheme);
  const mounted = useSyncExternalStore(emptySubscribe, getMounted, getServerMounted);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setStoredTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
