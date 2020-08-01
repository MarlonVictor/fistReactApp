import React from 'react'
import styled, {css} from 'styled-components'
import { FooterLinks, FooterSelect } from './styles'

const FooterComponent = ({className}) => {
  return (
    <footer className={className}>
      <p>Se gostar do projeto, me siga nas redes sociais ;)</p>

      <FooterLinks>
        <a href="https://github.com/MarlonVictor" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/marlon-victor-2548b51a2/" target="_blank">Linkedin</a>
        <a href="https://www.instagram.com/marloncrv/" target="_blank">Instagram</a>
      </FooterLinks>

      <FooterSelect>
        <option value="pt" defaultValue>Português</option>
        <option value="us">English</option>
      </FooterSelect>
    </footer>
  )
}

const Footer = styled(FooterComponent)`
  margin-top: 80px;
  background-color: var(--darkGray);
  height: 240px;
  color: var(--lightGray);
  padding: 30px 250px;
  font-weight: lighter;
  font-size: 16px;
  position: relative;

  &.light {
    background-color: var(--white);
  }

  @media(max-width: 855px) {
    padding: 30px 50px 40px;
    text-align: center;
  }
  ${props => props.bg === 'light' && css`
    background-color: var(--white);
    margin-top: 0;
  `}
`

export default Footer
