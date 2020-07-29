import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  padding-left: 10px;

  &:hover {
    box-shadow: 0 4px 16px rgba(2, -3, 1, 0.3);
    transform: translate(-3px, -3px);
    transition: .2s linear;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;