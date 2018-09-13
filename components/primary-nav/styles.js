import styled, {css} from "styled-components";
import {container} from "../../styles/mixins/grid";
import darken from "polished/lib/color/darken";

export const Root = styled.div`
  background-color: #fff;
`;

export const Container = styled.div`
  ${container};
`;

export const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const baseLink = css`
  text-decoration: ${props => props.isActive ? 'none' : 'underline'};
  
  padding: 14px 20px;
  line-height: 33px;
  font-weight: 700;
  color: #0000ee;
  
  &:visited {
    &, &:hover, &:focus, &:active {
      color: #0000ee;
    }
  }
  
  &:hover {
    text-decoration: none;
    color: ${darken(0.1, '#0000ee')};
  }
  
  &:focus {
    color: ${darken(0.25, '#0000ee')};
  }
`;

export const Logo = styled.div`
   ${baseLink};
`;

export const Links = styled.div`
  display: flex;
`;

export const StyledLink = styled.a`
  ${baseLink};
`;
