import React from 'react';
import styled from 'styled-components';
import {container} from "../../styles/mixins/grid";

const Root = styled.div`
  margin-top: 40px;
`;

const Container = styled.div`
  ${container};
`;

const List = styled.div`

`;

class Movies extends React.Component {
  render () {
    return(
      <Root>
        <Container>
          <List>
            {/* List of movies goes here */}
          </List>
        </Container>
      </Root>
    )
  }
};

export default Movies;
