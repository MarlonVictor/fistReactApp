import React from 'react'
import LogoImg from '../../assets/Logo.png'
import {HeaderStyle, Logo, Links} from './styles'

const Header = ({children}) => {
  return (
    <HeaderStyle>
      <Logo src={LogoImg} alt="Myflix Logo"></Logo>
      <Links>{children}</Links>
    </HeaderStyle>
  )
}

export default Header