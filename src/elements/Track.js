import React from 'react'
import styled from 'styled-components'

const TrackContainer = styled.div`
    display:flex;
    align-items: center;
    width:100%;
    margin-top:20px;
    margin-bottom:20px;
    border-bottom: 1px solid #4d4b4b;
`

const TrackText = styled.a`
    margin-right:1rem;
    margin-left:1rem;
    width: ${props => props.large ? '30%' : '20%'};
    font-weight: ${props => props.bold && '600'};
    color:white;
    text-decoration:none;
    font-size:.9rem;

    &:hover{
        text-decoration:underline;
    }
`

const TrackImageContainer = styled.a`
    width:20%;
    margin-right:1rem;
    margin-left:1rem;
`

const TrackImage = styled.img`
    width:64px;
`


const Track = ({ num, img, imgUrl, name, trackUrl, artist, artistUrl, at }) => {
    return (
        <TrackContainer>

            {at
                ?

                <>
                    <TrackText bold> {num} </TrackText>
                    <TrackImageContainer target="_blank" href={imgUrl}>
                        <TrackImage src={img} />
                    </TrackImageContainer>
                    <TrackText bold target="_blank" href={trackUrl}> {name} </TrackText>
                    <TrackText target="_blank" href={artistUrl}> {artist} </TrackText>

                    {/* If it has the "at" parameter, I'll add the hour and day information in the track */}
                    <TrackText>
                        {at[0]}
                        <br />
                        {at[1]}
                    </TrackText>
                </>

                :

                <>
                    <TrackText bold> {num} </TrackText>
                    <TrackImageContainer target="_blank" href={imgUrl}>
                        <TrackImage src={img} />
                    </TrackImageContainer>
                    <TrackText bold target="_blank" large href={trackUrl}> {name} </TrackText>
                    <TrackText large target="_blank" href={artistUrl}> {artist} </TrackText>
                </>

            }
        </TrackContainer>
    )
}

export default Track