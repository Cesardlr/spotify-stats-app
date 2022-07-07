import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../theme'
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

function SideBar({ setTimeRange, playlist }) {

    return (
        <SidebarContainer>
            <SidebarButtonContainer>
                <Button sidebar large onClick={() => setTimeRange("short_term")}>LAST MONTH</Button>
                <Button sidebar large onClick={() => setTimeRange("medium_term")}>LAST 6 MONTHS</Button>
                <Button sidebar large onClick={() => setTimeRange("long_term")}>ALL TIME</Button>

                {playlist && <Button large playlist purple>CREATE PLAYLIST</Button>}
            </SidebarButtonContainer>
        </SidebarContainer>
    )
}

export default SideBar