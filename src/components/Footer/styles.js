import styled from 'styled-components';

export const FooterBase = styled.footer`
  background-color: var(--darkGray);
  margin-top: 100px;
  height: 240px;
  color: var(--fontGray);
  padding: 30px 250px;
  font-weight: lighter;
  font-size: 16px;
  position: relative;
`;

export const FooterLinks = styled.div`
  padding: 30px 0;
  position: absolute;
  left: 45px;

  a {
    margin: 0 0 60px 209px;
    text-decoration: none;

    &:hover {
      color: var(--white)
    }
  }
  
`

export const FooterSelect = styled.select`
  margin-top: 80px;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #000;
  color: var(--fontGray);
`
