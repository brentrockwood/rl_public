"use client";

import { useEffect, useState } from "react";

const THEME_KEY = "rl-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    const hasSavedTheme = savedTheme === "light" || savedTheme === "dark";
    const nextTheme = hasSavedTheme ? savedTheme : media.matches ? "dark" : "light";

    // CSS applies the system theme before hydration; this keeps the control in sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(nextTheme);
    if (hasSavedTheme) document.documentElement.dataset.theme = nextTheme;

    const handleSystemChange = ({ matches }) => {
      const saved = window.localStorage.getItem(THEME_KEY);
      if (saved !== "light" && saved !== "dark") {
        setTheme(matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleSystemChange);
    return () => media.removeEventListener("change", handleSystemChange);
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggle}
      aria-pressed={theme === "dark"}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
            </g>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M21 14.5a8.5 8.5 0 1 1-8.5-8.5 6.5 6.5 0 0 0 8.5 8.5Z"
              fill="currentColor"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
