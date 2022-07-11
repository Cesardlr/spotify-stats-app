import axios from "axios"


async function getTopArtists(timeRange, logOut, token) {
    try {
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists",

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },

                params: {
                    time_range: timeRange,
                    limit: 50,
                    offset: 0,
                }

            })

        return data
    }
    catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        if (err.response.status === 401) logOut()
    }
}

async function getTopTracks(timeRange, logOut, token) {
    try {
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks",

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },

                params: {
                    time_range: timeRange,

                    // Here I did this dynamic so I could get another number of tracks if I want it passing it as a parameter to the component, (This is for the summary section)
                    limit: 50,
                    offset: 0,
                }

            })

        return data.items
    }
    catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        // if (err.response.status === 401) logOut()
        console.log(err)
    }
}

async function getRecentTracks( logOut, token) {
    try {
        const { data } = await axios.get("https://api.spotify.com/v1/me/player/recently-played",

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },

                params: {
                    limit: 50,
                    after: 1484811043508,
                }

            })

        return data.items
    }
    catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        if (err.response.status === 401) logOut()
    }
}

async function getUser(logOut, token) {
    try {
        const { data } = await axios.get("https://api.spotify.com/v1/me",

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })

        return data
    }
    catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        if (err.response.status === 401) logOut()
    }
}

async function createPlaylist(logOut, token, user_id) {
    try {
        const { data } = await axios.post(`https://api.spotify.com/v1/users/${user_id}/playlists`,

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                params: {
                    "name": "Spotify Stats Playlist",
                    "description": "Playlist created from the spotify-stats.com app",
                    "public": true
                }
            })

        return data
    }
    catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        if (err.response.status === 401) logOut()
    }
}


export { getTopArtists, getTopTracks, getRecentTracks, getUser, createPlaylist }