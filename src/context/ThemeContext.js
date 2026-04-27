import { createContext } from "react";


/*
    1. Create the Context
    - Import createContext from react, this is the function that sets up a context for your application to utilize
    - inside createContext, you keep track of the state that you want to be accessible throughout your app in an object
    - typically this includes your state variable and a function that modifies the state(either your setState function or a dedicated function that calls the setState function)
    - to set it up, you put default values inside your createContext
*/
// for ThemeContext we are saying that theme and handleThemeToggle should be accesible throughout our app.
const ThemeContext = createContext ({
    theme: "light", // default theme is "light"
    handleThemeToggle: () => {} // for functions, use an empty function for the default. this tells anyone using the context that a function will be passed here
})

export default ThemeContext