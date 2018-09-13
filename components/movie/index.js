import React from "react";
import T from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  border: 1px solid red;
`;

const Movie = (
  {
    movie
  }
) => {
  return(
    <Root>
      {movie.title}
    </Root>
  )
};

Movie.propTypes = {
  movie: T.shape(
    {
      poster: T.string.isRequired,
      title: T.string.isRequired,
      type: T.string.isRequired,
      year: T.number.isRequired,
      imdbid: T.string.isRequired
    }
  )
};

export default Movie;
