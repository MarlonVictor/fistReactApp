import React from 'react';
import { FooterBase, FooterLinks, FooterSelect } from './styles';

const Footer = () => {
  return (
    <FooterBase>
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
    </FooterBase>
  )
}

export default Footer
