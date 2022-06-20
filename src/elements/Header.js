import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TokenContext } from '../context/TokenContext'
import { ReactComponent as Logo } from '../images/Icons/logo-icon.svg'
import theme from '../theme'
import LogInButton from './LogInButton'

const HeaderContainer = styled.div`
    width:90%;
    margin:auto;
    margin-top:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const LogoIcon = styled(Logo)`
    width: 3.125rem; /*50px*/
    height: auto;
    fill: ${theme.green};
`;

const LinkContainer = styled.div`
    width: 37.5rem; /*600px*/
    display:flex;
    align-items: center;
    justify-content:space-between;
`

const LinkText = styled(Link)`
    font-size: 1rem;
    font-weight:600;
    text-align:center;
    color:white;
    text-decoration:none;

    &:hover{
        text-decoration:underline;
    }
`

function Header() {

    const tokenContext = useContext(TokenContext);

    const _token = tokenContext.token


    return (
        <HeaderContainer>
            <LogoIcon />

            {/* This other part of the header will only appear if there's a token */}
            {_token &&
                <LinkContainer>
                    <LinkText to="/">ABOUT</LinkText>
                    <LinkText to="/top-tracks">TOP TRACKS</LinkText>
                    <LinkText to="/top-artist">TOP ARTISTS</LinkText>
                    <LinkText to="/summary">SUMMARY</LinkText>
                </LinkContainer>
            }


            <LogInButton />



        </HeaderContainer>
    )
}

export default Header