import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const SectionTitle = styled.div`
    position:relative;
    display:inline-block;
    color: ${theme.yellow};
    margin-bottom:30px;
    font-size:${props => props.small ? '1rem' : '2rem'};
    font-weight:600;

    &:after {
        content:'';
        position:absolute;
        left:0; right:0;
        top:100%;
        margin:10px 0px;
        width:90%;
        height:4px;
        background:${theme.purple};
    }
`

export default SectionTitle