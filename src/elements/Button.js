import styled from 'styled-components'
import theme from '../theme'

const Button = styled.button`
    width: ${props => props.large ? '10rem' : props.logIn ? '20rem' : '6.25rem'}; /* 160px or 100px */
    height: 2.5rem; /* 40px */
    font-family:'Montserrat';
    font-size: .88rem; /* 14px */
    outline:none;
    background: ${props => props.purple ? theme.purple : props.blue ? theme.blue : theme.green};
    color: white;
    font-weight: 600;
    border:none;
    border-radius: .3125rem; /* 5px */
    margin-bottom: ${props => props.sidebar && '30px'};
    margin-top: ${props => props.playlist && '50px'};
    cursor:pointer;

    &:hover {
        background: ${theme.yellow};
        color: black;
    }


`;

export default Button