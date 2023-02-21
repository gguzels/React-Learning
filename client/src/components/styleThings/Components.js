import styled, { css } from "styled-components";

export const Title = styled.h1`
    font-size: 3rem;
    font-weight:600;
    ${props => props.theme === `dark` && css`
    background: #000;
    color:#fff;
    text-decoration:underline;
    `}
    &:hover{
        opacity: 0.8;
    }
`