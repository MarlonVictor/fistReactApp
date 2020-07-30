import styled from 'styled-components'

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  border-bottom: 3px solid;
  border-color: red;
  line-height: 1;
  border-radius: 4px;
  padding-bottom: 3px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`

export const VideoCardGroupContainer = styled.section`
  color: var(--white);
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`
