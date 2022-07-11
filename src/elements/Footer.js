import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  position:absolute;
    padding:2rem;
    left:0;
    right:0;
    text-align:center;
    margin-top:3rem;
    border-top: 1px solid #303030;
`

const FooterText = styled.p`
    font-size:.8rem;
    margin-bottom:.5rem;
`

function Footer() {
  return (
    <FooterContainer>
        <FooterText>We are not related to Spotify AB or any of it's partners in any way</FooterText>
        <FooterText>Created by <span style={{fontWeight:'600', textDecoration:'underline'}}>CESAR DEL RIO DE LA ROSA</span></FooterText>
        <FooterText>@2022 - Stats for Spotify</FooterText>
    </FooterContainer>
  )
}

export default Footer