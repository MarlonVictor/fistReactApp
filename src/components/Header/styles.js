import styled from 'styled-components'

// const menuArea = document.querySelector('nav')
// const body     = document.querySelector('body')
// 'linear-gradient(360deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)'

function scrollAnimate() {
    if(document.documentElement.scrollTop > 10) {
        console.log('foi');
        
    }
}
scrollAnimate()

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 999;

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
    }
`

export const Logo = styled.img`
    width: 250px;
    padding: 20px 35px 20px 60px;
` 