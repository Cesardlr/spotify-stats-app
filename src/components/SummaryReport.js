import axios from 'axios';
import React, { useContext} from 'react'
import styled from 'styled-components';
import { TokenContext } from '../context/TokenContext';
import Spinner from '../elements/Spinner';
import theme from '../theme';

const ReportContainer = styled.div`
    width:80%;
    display:flex;
    align-items: center;
    justify-content:space-between;
    margin-bottom:60px;
`


const ReportImage = styled.img`
    border-radius:50%;
    width:250px;
    height:250px;
    object-fit:cover;
`

const ReportInfoContainer = styled.div`
    width:60%;
`

const ReportInfoHeading = styled.h1`
    font-weight:500;
`

const ReportInfoHeadingSpan = styled.span`
    color: ${props => props.purple ? theme.purple : 'white'};
    font-weight: ${props => props.bold && '600'};
    text-decoration: ${props => props.underline && 'underline'};
`

const ReportInfoText = styled.p`
    margin:20px 0;
    font-size: 1rem;
    color: white;
`

const ReportInfoTextSpan = styled.a`
    font-size: 1rem;
    color: ${theme.purple};
    font-weight: 600;
    text-decoration:none;

    &:hover{
        text-decoration:underline;
    }
`

function SummaryReport({ time }) {

    // We get the token from the context
    const tokenContext = useContext(TokenContext);
    const loading = tokenContext.loading
    const topArtists = tokenContext.topArtists
    const topTracks = tokenContext.topTracks
    const user = tokenContext.user

    const topArtist = topArtists[0]
    const topTrack = topTracks[0]

    // console.log('TopArtists: ', topArtists)
    // console.log('TopTracks: ', topTracks)
    // console.log('user: ', user)

    // console.log('track: ', topTrack)
    // console.log('artist: ', topArtist)



    return (
        <>
            {
                !loading
                    ?
                    <ReportContainer>

                        {/* PROFILE PICTURE */}
                        <ReportImage src={user.images[0].url} />

                        <ReportInfoContainer>

                            {/* USER WELCOME */}
                            <ReportInfoHeading>
                                Hello <ReportInfoHeadingSpan bold underline>{user.display_name},</ReportInfoHeadingSpan> this are your <ReportInfoHeadingSpan purple>last month</ReportInfoHeadingSpan> listening stats
                            </ReportInfoHeading>

                            {/* FOLLOWERS */}
                            <ReportInfoText>
                                Followers:
                                <ReportInfoTextSpan> {user.followers.total} </ReportInfoTextSpan>
                            </ReportInfoText>

                            {/* TOP ARTIST */}
                            <ReportInfoText>
                                Your Top Artist:
                                <ReportInfoTextSpan
                                    href={topArtist.external_urls.spotify}
                                > {topArtist.name}</ReportInfoTextSpan>
                            </ReportInfoText>


                            {/* TOP TRACK */}
                            <ReportInfoText>
                                Your Top Track:
                                <ReportInfoTextSpan
                                    href={topTrack.external_urls.spotify}
                                >
                                    {' ' + topTrack.name + ' '}
                                </ReportInfoTextSpan>
                                by

                                <ReportInfoTextSpan
                                    href={topTrack.artists[0].external_urls.spotify}
                                >
                                    {' ' + topTrack.artists[0].name}
                                </ReportInfoTextSpan>
                            </ReportInfoText>

                            {/* <ReportInfoText>
                                Your Top Decade:
                                <ReportInfoTextSpan> 2020s</ReportInfoTextSpan>
                            </ReportInfoText>

                            <ReportInfoText>
                                Your Top Sub-Genre:
                                <ReportInfoTextSpan> Corridos</ReportInfoTextSpan>
                            </ReportInfoText> */}

                        </ReportInfoContainer>
                    </ReportContainer>

                    :
                    <Spinner />

            }
        </>
    )
}

export default SummaryReport