import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <footer className="footer">
      <p>Theme: {theme === "light" ? "Light" : "Dark"}</p>
    </footer>
  );
};

export default Footer;
