import React, { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../context/TokenContext';
// import { TokenContext, useToken } from '../context/TokenContext';
import Button from '../elements/Button'

const LogInButton = ({ mainPageText }) => {

    const CLIENT_ID = process.env.REACT_APP_CLIENTID
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
    const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT

    // The scopes are like the action that you are going to be able to use into your app using the spotify API
    // You can see more here: https://developer.spotify.com/documentation/general/guides/authorization/scopes/
    const scopes = [
        "user-top-read",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-modify-playback-state",
        // "playlist-modify-public",
        // "playlist-modify-private",
        "playlist-read-collaborative",
        "playlist-read-private",
    ];

    const tokenContext = useContext(TokenContext);

    const _token = tokenContext.token

    return (
        <>

            {
                !_token
                    ?
                    
                        mainPageText 
                        ?  
                        
                        <Button logIn
                            onClick = { (e) => {
                                e.preventDefault();
                                window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
                            }}
                        >
                            SIGN IN WITH YOUR SPOTIFY ACCOUNT
                        </Button>
                        
                        :

                        <Button
                            onClick = { (e) => {
                                e.preventDefault();
                                window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
                            }}
                        >
                            LOG IN
                        </Button>

                    :

                    // Using the tokenContext logOut function
                    <Button purple onClick={() => tokenContext.logOut()}>LOG OUT</Button>
            }

        </>
    );
}

export default LogInButton