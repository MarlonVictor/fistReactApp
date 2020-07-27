import styled from 'styled-components'

export const Link = styled.a`
    text-decoration: none;
    padding-left: 30px;
    font-size: 17px;
    font-weight: 600;
    color: #ccc;
    transition: .2s;

    &:hover {
        color: var(--white);
        cursor: pointer;
    } 
`