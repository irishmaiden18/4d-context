import { createContext } from "react";

const ThemeContext = createContext ({
    theme: "light",
    handleThemeToggle: () => {}
})

export default ThemeContext