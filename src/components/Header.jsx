import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const Header = () => {

  const {handleThemeToggle} = useContext(ThemeContext)

  return (
    <>
      <header className="header">
        <h1>My Dashboard</h1>
        <button onClick={handleThemeToggle}>Toggle Theme</button>
      </header>
    </>
  );
};

export default Header;
