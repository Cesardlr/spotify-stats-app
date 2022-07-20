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
        console.log('ERROR: ', err)
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
        if (err.response.status === 401) logOut()
        console.log('ERROR: ', err)
    }
}

async function getRecentTracks(logOut, token) {
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

        console.log('ERROR: ', err)
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

        console.log('ERROR: ', err)
    }
}

async function getPlaylists(logOut, token, user_id) {
    try {
        const { data } = await axios.get(`https://api.spotify.com/v1/users/${user_id}/playlists`,

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },

                params:{
                    limit: 10,
                    offset: 0,
                }
            })

        return data
    }
    catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        if (err.response.status === 401) logOut()

        console.log('ERROR: ', err)
    }
}

// POSTS

async function createPlaylist(logOut, token, user_id, timeRange, tracksUris) {
    try {

        // SETTIGN TIME RANGE TEXT TO USE IN THE NAME AND DESCRIPTION OF PLAYLIST
        let time = timeRange === "short_term" ? 'last month' : "medium_term" ? 'last 6 months' : "long_term" && 'all time'

        // GETTING TODAYS DATE
        var today = new Date();
        var date =
            today.getDate()
            + '/' +
            // This is for adding a "0" in the one digit day numbers
            ((today.getMonth() + 1).toString().length === 2 ? (today.getMonth() + 1) : '0' + (today.getMonth() + 1))
            + '/' +
            today.getFullYear();

            

        // CREATING PLAYLIST
        fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },

            body:
                JSON.stringify({
                    name: `Top Tracks (${date} - ${time}) `,
                    description: `Your favorite tracks ${time} as of ${date}. Created by statsforspotify.com`,
                    public: true
                }),
        })
            .then((res) => res.json())
            .then(jsonResponse => {
                const playlistId = jsonResponse.id;

                // ADDING TRACKS TO THE PLAYLIST
                addTracksToPlaylist(logOut, token, tracksUris, playlistId)
            });

    }
    catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        if (err.response.status === 401) logOut()
        console.log(err)
    }
}

async function addTracksToPlaylist(logOut, token, trackUris, playlist_id) {
    try {
        fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?position=0`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },

            body: JSON.stringify({
                "uris": trackUris,
                "position": 0
            })
        })
            .then((res) => res.json())
        // .then(res => console.log(res))

    }
    catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        // if (err.response.status === 401) logOut()
        console.log(err)
    }
}



export { getTopArtists, getTopTracks, getRecentTracks, getUser, createPlaylist, getPlaylists }