import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { TokenContext } from '../context/TokenContext'
import theme from '../theme'
import { createPlaylist, getUser } from '../utils/getData'
import Button from './Button'

const SidebarContainer = styled.div`
        width:20%;
        min-height:100vh;
        border-left: 1px solid ${theme.purple};
        display:flex;
        justify-content:end;
`

const SidebarButtonContainer = styled.div`
    position:fixed;
    display:flex;
    flex-direction:column;
    align-items: center;
`

function SideBar({ playlist }) {

    const tokenContext = useContext(TokenContext);
    const token = tokenContext.token
    const user = tokenContext.user
    const setTimeRange = tokenContext.setTimeRange
    const timeRange = tokenContext.timeRange
    const topTracks = tokenContext.topTracks
    
    // GETTING TRACK URIS FROM TOP TRACKS
    const tracksUris = topTracks.reduce((acc, el)=> {
        acc.push(el.uri)
        return acc
    }, [])

    // const [created, setCreated] = useState(false)

    return (
        <SidebarContainer>
            <SidebarButtonContainer>
                <Button sidebar large onClick={() => setTimeRange("short_term")}>LAST MONTH</Button>
                <Button sidebar large onClick={() => setTimeRange("medium_term")}>LAST 6 MONTHS</Button>
                <Button sidebar large onClick={() => setTimeRange("long_term")}>ALL TIME</Button>

                {playlist &&

                    // created

                    // ?
                    <Button large playlist purple
                        onClick={() => {
                            createPlaylist(tokenContext.logOut, token, user.id, timeRange, tracksUris)
                        }}>

                        CREATE PLAYLIST
                    </Button>

                    // :
                    // <Button large playlist blue
                    //     onClick={() => {
                    //         createPlaylist(tokenContext.logOut, token, user.id)
                    //         setCreated(true)
                    //     }}>

                    //     VIEW PLAYLIST
                    // </Button>
                }
            </SidebarButtonContainer>
        </SidebarContainer>
    )
}

export default SideBar