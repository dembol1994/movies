import styled from 'styled-components';
import {container} from "../styles/mixins/grid";
import React from 'react';
import Movies from '../components/movies';
import {GlobalStyle} from "../styles/global";
import PrimaryNav from "../components/primary-nav";

const Root = styled.div`
`;

const Container = styled.div`
  ${container};
`;

class Page extends React.Component {
  render() {
    return(
      <React.Fragment>
        <GlobalStyle/>
        <PrimaryNav/>
        <Root>
          <Container>
            <Movies/>
          </Container>
        </Root>
      </React.Fragment>
    )
  }
};

export default Page;
