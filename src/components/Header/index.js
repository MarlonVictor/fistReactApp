import React from 'react'
import LogoImg from '../../assets/Logo.png'
import {HeaderStyle, Logo} from './styles'

//let bgColor = 'linear-gradient(360deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)'

// function componentDidMount() {
//     window.addEventListener('scroll', () => {
//       if(window.scrollY > 50) {
        
//         console.log('foi')
//       }
//     })
//   }

const Header = ({children}) => {
  return (
    <HeaderStyle>
      <Logo src={LogoImg} alt="Myflix Logo"></Logo>
      <nav className="headerLinks">
        {children}
      </nav>
    </HeaderStyle>
  )
}

export default Header