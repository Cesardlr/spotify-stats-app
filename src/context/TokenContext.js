import React, { useEffect, useState } from "react";
import { getRecentTracks, getTopArtists, getTopTracks, getUser } from "../utils/getData";

// token is the state
// logOut is the function for deleting the token state
// This are the states I'll pass to the children components
// Exporting the context
export const TokenContext = React.createContext(
    {
        token: "",
        loading: true,
        logOut: () => { },
        timeRange: "",
        setTimeRange: () => { },
        topTracks: [],
        topArtists: [],
        recentTracks: [],
        user: [],
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
    const [timeRange, setTimeRange] = useState("short_term")

    const [topTracks, setTracks] = useState([])
    const [topArtists, setArtists] = useState([])
    const [recentTracks, setRecentTracks] = useState([])
    const [user, setUser] = useState([])


    // Function for logging out
    const logOut = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

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




        getUser(logOut, token)
            .then(res => setUser(res))

    }, [])


    // GETTING THE DATA FROM SPOTIFY API WITH THE UTILS/FUNCTIONS
    useEffect(() => {

        getRecentTracks(logOut, token)
            .then(res => setRecentTracks(res))

        getTopArtists(timeRange, logOut, token)
            .then(res => setArtists(res.items))

        getTopTracks(timeRange, logOut, token)
            .then(res => setTracks(res))
            .then(() => setLoading(false))

    }, [timeRange])

    // console.log('token: ', token)
    // console.log('logOut: ', logOut)
    // console.log('loading: ', loading)
    // console.log('topTracks: ', topTracks)
    // console.log('topArtists: ', topArtists)
    console.log('recentTracks: ', recentTracks)
    // console.log('user: ', user)
    // console.log('timeRange: ', timeRange)

    // This will return the children component and it'll be passed the token state and logout function
    return (
        <TokenContext.Provider
            value={
                {
                    token: token,
                    logOut: logOut,
                    loading: loading,
                    topTracks: topTracks,
                    topArtists: topArtists,
                    recentTracks: recentTracks,
                    user: user,
                    timeRange: timeRange,
                    setTimeRange: setTimeRange
                }
            }
        >
            {props.children}
        </TokenContext.Provider>
    );
};

export default TokenContextProvider;