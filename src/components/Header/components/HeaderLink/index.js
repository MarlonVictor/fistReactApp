import React from 'react';
import { Link } from './styles';

const HeaderLink = props => {
  return (
    <nav className="headerLinks">
      <Link>Home</Link>
      <Link href={props.href}>{props.children}</Link>
    </nav>
  )
}

export default HeaderLink; 