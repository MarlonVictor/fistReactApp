import styled from 'styled-components';

export const FooterLinks = styled.div`
  padding: 30px 0;
  position: absolute;
  left: 45px;

  a {
    margin: 0 0 60px 209px;
    text-decoration: none;

    &:hover {
      color: var(--fontGray)
    }
  }

  @media(max-width: 855px) {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 0;

    a {
      margin-left: 0;
    }
    a:not(:first-child) {  
      margin-left: 20px;
    }
  }
`

export const FooterSelect = styled.select`
  margin-top: 80px;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: transparent;
  color: var(--fontGray);
  @media(max-width: 855px) {
    margin-top: 10px;
  }
`