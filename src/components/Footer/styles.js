import styled from 'styled-components';

export const FooterBase = styled.footer`
  background-color: var(--white);
  height: 240px;
  color: var(--lightGray);
  padding: 30px 250px;
  font-weight: lighter;
  font-size: 16px;
  position: relative;

  @media(max-width: 855px) {
    padding: 30px 50px;
    text-align: center;
  }
`;

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

    a {
      margin-left: 10px;
    }
  }
`

export const FooterSelect = styled.select`
  margin-top: 80px;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: transparent;
  color: var(--lightGray);

  @media(max-width: 855px) {
    margin-top: 10px;
  }
`