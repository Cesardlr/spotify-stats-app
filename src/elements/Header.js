import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TokenContext } from '../context/TokenContext'
import { ReactComponent as Logo } from '../images/Icons/logo-icon.svg'
import { ReactComponent as MenuIcon } from '../images/Icons/menu-icon.svg'
import theme from '../theme'
import LogInButton from './LogInButton'

const HeaderContainer = styled.div`
    width:100%;
    margin:auto;
    margin-top:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 50px;
    /* position:relative; */
    /* background-color:#c2c2c2; */

    @media screen and (max-width: ${theme.large}){ 
        align-items: center;
        margin-top:none;
        flex-wrap:wrap;
    }
`

const LogoIcon = styled(Logo)`
    width: 3rem; /*50px*/
    height: auto;
    fill: ${theme.green};
    display:block;

    @media screen and (max-width: ${theme.large}){ 
        margin-right:0px;
    }
`;

const LinkContainer = styled.div`
    width: 63rem; /*800px*/
    display:flex;
    align-items: center;
    justify-content:space-between;
    margin: 0 30px;
    
    @media screen and (max-width: ${theme.large}){ 
        width:100%;
        display:none;
        flex-direction:column;
        justify-content:center;
        align-items: end;
        order:1;
        margin:0;
    }
`

const LinkText = styled(Link)`
    font-size: 1rem;
    font-weight:600;
    text-align:center;
    color:white;
    text-decoration:none;
    display:inline;

    &:hover{
        text-decoration:underline;
    }

    @media screen and (max-width: ${theme.large}){ 
        margin-bottom:20px;
    }
`

const Icon = styled.a`
    display: none;

    @media screen and (max-width: ${theme.large}){ 
        display:block;
    }
`

const Hamburguer = styled(MenuIcon)`
    width: 2.5rem;
    height: auto;
    fill: ${theme.green};
    display:none;

    @media screen and (max-width: ${theme.large}){ 
        display:block;
    }
`

// Function for when I click the menu it dorps down
function toggleMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function Header() {

    const tokenContext = useContext(TokenContext);
    const _token = tokenContext.token


    return (
        <HeaderContainer>
            <LinkText to="/"><LogoIcon /></LinkText>

            {/* This other part of the header will only appear if there's a token */}
            {_token &&
                <>
                    <LinkContainer id="myLinks">
                        <LinkText to="/top-tracks">TOP TRACKS</LinkText>
                        <LinkText to="/top-artist">TOP ARTISTS</LinkText>
                        <LinkText to="/recently-played">RECENTLY PLAYED</LinkText>
                        <LinkText to="/summary">SUMMARY</LinkText>
                    </LinkContainer>
                </>
            }


            <LogInButton />

            {_token &&
                <Icon onClick={toggleMenu}>
                    <Hamburguer />
                </Icon>
            }






        </HeaderContainer>
    )
}

export default Header