import "./App.css";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import UserContext from "./context/UserContext";

function App() {

  const [theme, setTheme] = useState("light")
  const [user, setUser] = useState({username: "", isLoggedIn: false})

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    /*
      2. Provide the Context
      - wrap your application in the context you want to provide. 
      - use value ={} to pass in state/set state function you want to keep track of (in this case, theme and handleThemeToggle)
      
      your app will now have acces to this state (as long as the component is wrapped in the ThemeContext Provier)
    */
   // Context Provider
   <UserContext value={{
      // since the names are the same we could just use them once
      user: user,
      setUser: setUser
   }}>
      <ThemeContext value={{
        // since the names are the same we could just use them once
        theme: theme,
        handleThemeToggle: handleThemeToggle
      }}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </ThemeContext>
    </UserContext>
  );
}

export default App;