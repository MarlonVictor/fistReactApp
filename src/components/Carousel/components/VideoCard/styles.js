import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 5px solid #141414;
  border-radius: 10px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 330px;
  height: 190px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 330px;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
