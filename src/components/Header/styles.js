import styled from 'styled-components'

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 999;

    &.scrolled {
        background: #040404;
    }

    @media(max-width: 500px) {
        flex-direction: column;

        .headerLinks {
            display: flex;
            justify-content: space-evenly;
        }
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

export const Logo = styled.img`
    width: 250px;
    padding: 20px 35px 20px 60px;

    @media(max-width: 500px) {
        width: 180px;
        padding: 5px 0 0;
    }
` 