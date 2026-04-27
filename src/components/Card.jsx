import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const Card = ({ title, text}) => {

  const {theme} = useContext(ThemeContext)

  return (
    <>
      <div className={`card ${theme}`}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Card;
