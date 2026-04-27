import { useContext, useState } from "react"
import UserContext from "../context/UserContext"
import { useNavigate } from "react-router"

const Login = () => {

    const [usernameInput, setUsernameInput] = useState("")

    const {setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const handleSubmit = (event) => {

        event.preventDefault()

        // logging in the user
        setUser({username: usernameInput, isLoggedIn: true})

        // utilizing our useNavigate hook to redirect to the home page after clicking Login
        navigate("/")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label>Enter your username: </label>
                    <input 
                        value={usernameInput}
                        onChange={(event) => setUsernameInput(event.target.value)}
                    />
                </div>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login