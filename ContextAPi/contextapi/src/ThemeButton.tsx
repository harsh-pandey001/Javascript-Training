import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeButton: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeButton must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
};

export default ThemeButton;
