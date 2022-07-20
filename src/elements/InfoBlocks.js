import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import { ReactComponent as StatsIcon } from './../images/Icons/stats-icon.svg'
import { ReactComponent as PlaylistIcon } from './../images/Icons/playlist-icon.svg'
import { ReactComponent as RecentlyPlayedIcon } from './../images/Icons/recently-played.svg'
import { ReactComponent as HappyFaceIcon } from './../images/Icons/happy-face-icon.svg'

const InfoBlocksContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items: top;
    margin-top:1rem;

    @media screen and (max-width: ${theme.large}){ 
        width:100%;
        flex-wrap:wrap;
        margin:0 auto;
    }

    @media screen and (max-width: ${theme.small}){
        width:100%;
    }
`

const InfoBlockDiv = styled.div`
    width:20%;
    min-height:12rem;
    text-align:center;
    padding:1rem;
    border: 2px solid white;
    border-radius:5px;

    @media screen and (max-width: ${theme.large}){ 
        width:45%;
        margin:1rem;
    }

    @media screen and (max-width: ${theme.small}){
        width:100%;
    }
`

const StyledIcon = [`
    width:3rem;
    height:3rem;
    margin-bottom:.5rem;

    path{
        fill:${theme.yellow};
    }
`]

const InfoBlockTitle = styled.h3`
    color:${theme.purple};
    margin-bottom:1rem;

`

const InfoBlockText = styled.p`
    color:white;
    font-size:1rem;
`

// Styling Icons
const StyledStatsIcon = styled(StatsIcon)(StyledIcon)
const StyledPlaylistIcon = styled(PlaylistIcon)(StyledIcon)
const StyledRecentlyPlayedIcon = styled(RecentlyPlayedIcon)(StyledIcon)
const StyledHappyFaceIcon = styled(HappyFaceIcon)(StyledIcon)

const InfoBlock = ({ icon, title, text }) => {
    return (
        <InfoBlockDiv>
            {
                icon === "stats" ?
                    <StyledStatsIcon /> :
                    icon === "playlist" ?
                        <StyledPlaylistIcon /> :
                        icon === "recently" ?
                            <StyledRecentlyPlayedIcon /> :
                            icon === "happy" &&
                            <StyledHappyFaceIcon />
            }
            <InfoBlockTitle>{title}</InfoBlockTitle>
            <InfoBlockText>{text}</InfoBlockText>
        </InfoBlockDiv>
    );
}

function InfoBlocks() {
    return (
        <InfoBlocksContainer>
            <InfoBlock
                icon="stats"
                title="YOUR OWN STATS"
                text="Check your stats anytime, anywhere!!!"
            />
            <InfoBlock
                icon="playlist"
                title="CREATE PLAYLISTS"
                text="Create playlists from your top tracks"
            />
            <InfoBlock
                icon="recently"
                title="RECENTLY PLAYED TRACKS"
                text="Check all the tracks that you listened recently"
            />
            <InfoBlock
                icon="happy"
                title="TOP TRACKS BY MOOD"
                text="Check the tracks that you listen the most by mood"
            />
        </InfoBlocksContainer>
    )
}

export default InfoBlocks