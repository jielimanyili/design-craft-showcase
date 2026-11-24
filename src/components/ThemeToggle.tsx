import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "./Icons";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // storage unavailable (e.g. private browsing) — the choice just won't persist
    }
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <IconSun size={16} /> : <IconMoon size={16} />}
    </button>
  );
}