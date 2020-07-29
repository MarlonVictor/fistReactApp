import React from 'react'
import LogoImg from '../../assets/img/Logo.png'
import {HeaderStyle, Logo} from './styles'

const Header = ({children}) => {
  return (
    <HeaderStyle>
      <Logo src={LogoImg} alt="Myflix Logo"></Logo>
      {children}
    </HeaderStyle>
  )
}

export default Header