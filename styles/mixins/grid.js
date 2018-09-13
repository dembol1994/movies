import { css } from 'styled-components'

export const container = css`
  max-width: 90%;

  margin-left: auto;
  margin-right: auto;
  
  @media screen and (min-width: 560px) {
    max-width: 80%;
  }
  
  @media screen and (min-width: 768px) {
    max-width: 750px;
  }
  
  @media screen and (min-width: 992px) {
    max-width: 970px;
  }
  
  @media screen and (min-width: 1200px) {
    max-width: 1170px;
  }
`;

export const pageContainer = css`
  display: block;
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background-color: #F6F6F6;
`;
