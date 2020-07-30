import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 5px solid #141414;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 300px;
  height: 190px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 330px;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  filter: opacity(70%);
  margin: 0 -5px;

  transition: .3s;
  &:hover,
  &:focus {
    filter: opacity(100%);
    z-index: 999;
    transform: scale(1.1);
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
