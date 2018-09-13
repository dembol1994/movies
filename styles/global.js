import {createGlobalStyle, css} from 'styled-components';
import styledNormalize from 'styled-normalize'
import {TextFont, HeadingsFont} from "./mixins/typography";

const external = css`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,700,700italic,800,800italic&amp;subset=latin,latin-ext");
`;

const custom = css`  
  * {
    box-sizing: border-box;
  };
  
  body {
    ${TextFont};    
    color: #333;
  }
  
  h1, h2, h3, h4, h5, h6 {
    ${HeadingsFont};
    color: #000;
  }
`;

export const GlobalStyle = createGlobalStyle`  
  ${external};
  ${styledNormalize};
  ${custom};
`;
