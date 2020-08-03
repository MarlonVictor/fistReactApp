import React from 'react'
import LogoImg from '../../assets/Logo.png'
import styled, {css} from 'styled-components';
import { Logo, Links } from './styles'

const HeaderComponent = ({children, className}) => {
  return (
    <header className={className}>
      <Logo src={LogoImg} alt="Myflix Logo"></Logo>
      <Links>{children}</Links>
    </header>
  )
}

const Header = styled(HeaderComponent)`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 999;
    background: ${props => props.bg === 'dark' && css`var(--darkGray)` || css`linear-gradient(360deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`};

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

export default Header