import React from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../theme'

const Spin = keyframes`
    0% { transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const SpinnerDiv = styled.div`
    border: 10px solid ${theme.yellow};
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border-left-color: ${theme.purple};
    position:relative;
    top:50%;
    left:50%;

    animation: ${Spin} 1s ease infinite;
`
function Spinner({ loading, setLoading }) {
    const spin = setInterval(() => {
        setLoading(false)
    }, 1000);

    !loading && clearInterval(spin)

    return (
        <SpinnerDiv />
    )
}

export default Spinner