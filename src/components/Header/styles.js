import styled from 'styled-components'

export const Links = styled.nav`
    @media(max-width: 500px) {
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 5px;
    }
`

export const Logo = styled.img`
    width: 250px;
    padding: 15px 35px 15px 60px;

    @media(max-width: 500px) {
        width: 180px;
        padding: 5px 0 0;
    }
` 