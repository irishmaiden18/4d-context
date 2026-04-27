import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {

  const [theme, setTheme] = useState("light")

  const handleThemeToggle = () => {

    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }

  }

  return (
    <ThemeContext value={{
      // sinc the names are the same we could just use them once
      theme: theme,
      handleThemeToggle: handleThemeToggle
    }}>
      <div className={`app-container ${theme}`}>
        <Header/>
        <Dashboard/>
        <Footer/>
      </div>
    </ThemeContext>
  );
}

export default App;