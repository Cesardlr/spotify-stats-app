import React from 'react'
import styled from 'styled-components'
import InfoBlocks from '../elements/InfoBlocks'
import LogInButton from '../elements/LogInButton'
import SectionTitle from '../elements/SectionTitle'
import theme from '../theme'
import { ReactComponent as CheckIcon } from './../images/Icons/check-mark-icon.svg'

const HeroContainer = styled.div`
  width:80%;
  margin: 80px auto;
  text-align:center;

  @media screen and (max-width: ${theme.small}){ /* 950px */
        width:100%;
  }
`

const HeroTitle = styled.h1`
  font-size:4rem;
  color:${theme.green};
  text-align:center;
  margin:20px auto;

  @media screen and (max-width: ${theme.large}){ /* 950px */
        font-size: 3rem;
  }
  @media screen and (max-width: ${theme.small}){ /* 950px */
        font-size: 2rem;
  }
`

const HeroText = styled.p`
  font-size:1rem;
  color: ${props=> props.yellow ? theme.yellow : 'white'};
  text-align:center;
  margin-bottom:${props => props.margin && '20px'};
`

const HeroInfoContainer = styled.div`
  margin-top:20px;
  display:flex;
  padding: 0 20px;
  align-items: center;
  justify-content:center;
`

const HeroIcon = styled(CheckIcon)`
  width:2rem;
  height:2rem;
  margin-right:30px;
  path{
    fill:${theme.yellow};
  }
`

function HomeLogIn() {
  return (
    <div>
      <>
      <HeroContainer>
        <HeroTitle>YOUR SPOTIFY DATA IN ONLY ONE PLACE</HeroTitle>
        <HeroText margin>Your top songs, genres, artists and moods</HeroText> 
        <LogInButton mainPageText={true}/> 

        <HeroInfoContainer>
          <HeroIcon/>
          <HeroText yellow>Your stats report is 100% private</HeroText>
        </HeroInfoContainer>

        <HeroInfoContainer>
          <HeroIcon/>
          <HeroText yellow>We don’t store spotify users data</HeroText>
        </HeroInfoContainer>

      </HeroContainer>

      <SectionTitle small>WHAT CAN YOU CHECK OUT WITH YOUR SPOTIFY DATA?</SectionTitle>
      <InfoBlocks />

      </>
    </div>
  )
}

export default HomeLogIn