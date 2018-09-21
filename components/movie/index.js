import React from "react";
import T from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  border: 1px solid red;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 15px;
`;

const Row = styled.div`
  margin: 10px 0;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

const Movie = ({movie}) => {

  const linkToImbd = `https://www.imdb.com/title/${movie.imdbID}/`;

  return(
      <Root>
            <Row>{movie.Title} </Row>
            <Row>Year: {movie.Year}</Row>
            <Row>
            <Link target="_blank"
                  href={linkToImbd}>Open imdb</Link>
            </Row>
        </Root>
  )
};

Movie.propTypes = {
  movie: T.shape(
    {
      Poster: T.string.isRequired,
      Title: T.string.isRequired,
      Type: T.string.isRequired,
      Year: T.number.isRequired,
      imdbID: T.string.isRequired
    }
  )
};

export default Movie;
