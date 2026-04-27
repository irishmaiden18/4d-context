import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";
import { Link } from "react-router";


const Header = () => {

  /*
    3. Use the Context!
    - utilize the useContext hook to select the context we want to access (in this case, ThemeContext)
    - then you are free to use any variables/functions that you have set up in that context
  */

  const {handleThemeToggle} = useContext(ThemeContext)
  const {user, setUser} = useContext(UserContext)
  //test:
  //const [user, setUser] = useState({username: "testUser101", isLoggedIn: true})

  return (
    <>
      <header className="header">
        <div>
          <h1>My Dashboard</h1>
          <button onClick={handleThemeToggle}>Toggle Theme</button>
        </div>
        <div>
          {
            user.isLoggedIn ? (
              <>
                <h3>User: {user.username}</h3>
                <button 
                  onClick={() => setUser({username: "", isLoggedIn: false})}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <h3>Please Login</h3>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </>
            )
          }
        </div>
      </header>
    </>
  );
};

export default Header;
