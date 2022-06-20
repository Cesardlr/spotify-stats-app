import React from 'react'
import axios from 'axios';



const getTopTracks = async (token) => {
    try {
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks",

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                params: {
                    time_range: "long_term",
                    limit: 50,
                    offset: 0,
                }
            })
        return { data }
    }
    catch (err) {
        console.log(err.response.status)
    }
}

// const getTopArtists = async (token) => {
//     try {
//         const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists",

//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     "Content-Type": "application/json",
//                 },
//                 params: {
//                     time_range: "long_term",
//                     limit: 50,
//                     offset: 0,
//                 }
//             })
//         return { data }
//     }
//     catch (err) {
//         console.log(err.response.status)
//     }
// }

export {getTopTracks}