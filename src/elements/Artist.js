import React from 'react'
import styled from 'styled-components'

const ArtistContainer = styled.div`
    color:#fff;
    margin-bottom:20px;
`

const ArtistImage = styled.img`
    width:15.7rem; /* 15.7px */
    height:15.7rem;
    object-fit:contain;
    margin-bottom:10px;
`

const ArtistName = styled.a`
    font-weight:600;
    font-size:1rem;
    display:block;
    text-align:center;
    cursor:pointer;
    text-decoration:none;
    color:#fff;

    &:hover{
        text-decoration:underline;
    }
`

function Artist({ url, img, num, name }) {
    return (
        <ArtistContainer >
            <ArtistImage src={img} />
            <ArtistName href={url} target="_blank"> {`# ${num} - ${name}`}</ArtistName>
        </ArtistContainer>
    )
}

export default Artist