import styled from 'styled-components'

export const HeaderStyle = styled.header`
    background: linear-gradient(360deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 999;

    @media(max-width: 500px) {
        flex-direction: column;
    }

    a {
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

        @media(max-width: 500px) {
            padding: 0 5px;
        }
    }
`

export const Links = styled.nav`
    @media(max-width: 500px) {
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 5px;
    }
`

export const Logo = styled.img`
    width: 250px;
    padding: 20px 35px 20px 60px;

    @media(max-width: 500px) {
        width: 180px;
        padding: 5px 0 0;
    }
` 