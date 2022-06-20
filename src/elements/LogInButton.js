import React, { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../context/TokenContext';
// import { TokenContext, useToken } from '../context/TokenContext';
import Button from '../elements/Button'

const LogInButton = () => {


    const CLIENT_ID = "ffc88e7cb6f84f0fb4012d26f5fd13b5"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"

    // The scopes are like the action that you are going to be able to use into your app using the spotify API
    // You can see more here: https://developer.spotify.com/documentation/general/guides/authorization/scopes/
    const scopes = [
        "user-top-read",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-modify-playback-state"
    ];

    const tokenContext = useContext(TokenContext);

    const _token = tokenContext.token

    console.log(_token)

    return (
        <>

            {
                !_token
                    ?
                    <Button
                        onClick={(e) => {
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