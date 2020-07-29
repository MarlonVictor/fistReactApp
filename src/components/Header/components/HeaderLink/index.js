import React from 'react';
import { Link } from 'react-router-dom'

const HeaderLink = ({children}) => {
  return (
    <nav className="headerLinks">
      <Link>{children}</Link>
    </nav>
  )
}

export default HeaderLink; 