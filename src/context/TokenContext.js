import React, { useEffect, useState } from "react";

// token is the state
// logOut is the function for deleting the token state
// This are the states I'll pass to the children components
// Exporting the context
export const TokenContext = React.createContext(
    {
        token: "",
        logOut: () => { },
    }
);

// This is for getting if theres already a token and setting it to the state
function getInitialState() {
    const token = localStorage.getItem('token')
    return token ? token : ""
}

// This will be the context provider
// THIS WILL BE THE WRAPPER OF THE APP IN THE INDEX.JS FILE
const TokenContextProvider = (props) => {

    const [token, setToken] = useState(getInitialState);
    const [loading, setLoading] = useState(true) 

    // Use Effect for getting the token form the url and saving it in the local storage and set it to the state
    useEffect(() => {
        const hash = window.location.hash
        let _token = window.localStorage.getItem("token")

        if (!_token && hash) {
            _token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", _token)
        }

        setToken(_token)

        // After we get the token the app isn't loading anymore so we change it to false
        setLoading(!loading)

    }, [])

    // Function for logging out
    const logOut = () => {
        setToken("")
        window.localStorage.removeItem("token")
        // setLoading(true)
    }

    // This will return the children component and it'll be passed the token state and logout function
    return (
        <TokenContext.Provider
            value={{ token: token, logOut: logOut, loading:loading }}
        >
            {props.children}
        </TokenContext.Provider>
    );
};

export default TokenContextProvider;