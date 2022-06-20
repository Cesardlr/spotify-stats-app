import React, { useContext } from 'react'
import styled from 'styled-components'
import { TokenContext } from '../context/TokenContext'
import { ReactComponent as Logo } from '../images/Icons/stats-icon.svg'
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

const LinkText = styled.a`
    font-size: 1rem;
    font-weight:600;
    text-align:center;
`

function Header() {

    const tokenContext = useContext(TokenContext);

    const _token = tokenContext.token


    return (
        <HeaderContainer>
            <LogoIcon />

            {_token &&
                <LinkContainer>
                    <LinkText>TOP TRACKS</LinkText>
                    <LinkText>TOP ARTISTS</LinkText>
                    <LinkText>SUMMARY</LinkText>
                    <LinkText>MY GITHUB</LinkText>
                </LinkContainer>
            }


            <LogInButton />



        </HeaderContainer>
    )
}

export default Header