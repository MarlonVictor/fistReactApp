import React from 'react'
import LogoImg from '../../assets/img/Logo.png'
//import './Header.css'
import HeaderLink from './components/HeaderLink'
import {HeaderStyle, Logo} from './styles'

const Header = () => {
  return (
    <HeaderStyle>
      <Logo src={LogoImg} alt="Myflix Logo"></Logo>

      <HeaderLink className="HeaderLink" href="/">
        Novo Video
      </HeaderLink>
    </HeaderStyle>
  )
}

export default Header