import React from 'react';
import { FooterBase, FooterLinks, FooterSelect } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>Se gostar do projeto, me siga nas redes sociais ;)</p>

      <FooterLinks>
        <a href="">Github</a>
        <a href="">Linkedin</a>
        <a href="">Instagram</a>
      </FooterLinks>

      <FooterSelect name="" id="">
            <option value="pt" selected>Português</option>
            <option value="us">English</option>
      </FooterSelect>

    </FooterBase>
  )
}

export default Footer
