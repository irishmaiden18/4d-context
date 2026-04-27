import { createContext } from "react";

const UserContext = createContext({
    user: {username: "", isLoggedIn: false},
    setUser: () => {}
})

export default UserContext