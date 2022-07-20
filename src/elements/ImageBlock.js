import React from 'react'
import styled from 'styled-components'

const ImageBlockContainer = styled.div`
    color:#fff;
    margin-bottom:20px;
    display:flex;
    flex-direction:column;
    align-items: center;
`

const ImageBlockImage = styled.img`
    width:15.7rem; /* 15.7px */
    height:15.7rem;
    object-fit:cover;
    margin-bottom:10px;
`

const ImageBlockName = styled.a`
    font-weight:600;
    font-size:1rem;
    display:block;
    text-align:center;
    cursor:pointer;
    text-decoration:none;
    color:#fff;
    max-width:15.7rem;

    &:hover{
        text-decoration:underline;
    }
`

function ImageBlock({ url, img, num, name }) {
    return (
        <ImageBlockContainer >
            <ImageBlockImage src={img} />
            <ImageBlockName href={url} target="_blank"> {`# ${num} - ${name}`}</ImageBlockName>
        </ImageBlockContainer>
    )
}

export default ImageBlock