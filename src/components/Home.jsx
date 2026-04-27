import { useContext } from "react"
import Dashboard from "./Dashboard"
import Footer from "./Footer"
import Header from "./Header"
import ThemeContext from "../context/ThemeContext"

const Home = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={`app-container ${theme}`}>
            <Header/>
            <Dashboard/>
            <Footer/>
        </div>
    )
}

export default Home