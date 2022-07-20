import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../theme'
import { ReactComponent as TrackIcon } from './../images/Icons/track-icon.svg'
import { ReactComponent as ArtistIcon } from './../images/Icons/artist-icon.svg'
import { ReactComponent as SummaryIcon } from './../images/Icons/summary-icon.svg'
import InfoBlocks from '../elements/InfoBlocks'
import SectionTitle from './../elements/SectionTitle'


const SectionButtonContainer = styled.div`
    width: 40%;
    margin:auto;
    margin-bottom:2rem;

    @media screen and (max-width: ${theme.large}){ 
        width:70%;
    }
`

const SectionButtonContentContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content:space-around;
  width:50%;
  margin: 0 auto;
  @media screen and (max-width: ${theme.large}){ 
        width:80%;
  }
`

const SectionButton = styled(Link)`
    width: 100%;
    padding: 1rem; /* 32px */
    display:block;
    font-family:'Montserrat';
    font-size: 1.5rem; /* 24px */
    text-align:center;
    outline:none;
    background: ${theme.green};
    color: white;
    text-decoration:none;
    font-weight: 600;
    border:none;
    border-radius: .3125rem; /* 5px */
    margin-bottom: 2rem;
    cursor:pointer;

    &:hover {
        background: ${theme.yellow};
        color: black;
        
        /* For changing the svg color */
        path {
          fill: black;
        }
    }

    @media screen and (max-width: ${theme.large}){ 
    width:100%;
}
`


const StyledIcon = [
  `
  margin-left:2rem;
  height: 3rem;
  width: 3rem;
  path {
      fill: white;
  }

`
]

// Styling Icons
const StyledTrackIcon = styled(TrackIcon)(StyledIcon)
const StyledArtistIcon = styled(ArtistIcon)(StyledIcon)
const StyledSummaryIcon = styled(SummaryIcon)(StyledIcon)


function Home() {

  return (
    <>


      <SectionButtonContainer>

        <SectionButton to="/top-tracks">
          <SectionButtonContentContainer>
            <p>TOP TRACKS</p>
            <StyledTrackIcon />
          </SectionButtonContentContainer>
        </SectionButton>

        <SectionButton to="/top-artist">
          <SectionButtonContentContainer>
            <p>TOP ARTISTS</p>
            <StyledArtistIcon />
          </SectionButtonContentContainer>
        </SectionButton>

        <SectionButton to="/summary">
          <SectionButtonContentContainer>
            <p>SUMMARY</p>
            <StyledSummaryIcon />
          </SectionButtonContentContainer>
        </SectionButton>

      </SectionButtonContainer>

      <SectionTitle small>WHAT CAN YOU CHECK OUT WITH YOUR SPOTIFY DATA?</SectionTitle>
      <InfoBlocks />
    </>
  )
}

export default Home