import React from 'react';
import styled from 'styled-components';
import {container} from "../../styles/mixins/grid";
import axios from 'axios';
import Movie from '../movie/index';

const Root = styled.div`
  margin-top: 40px;
`;

const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  label{
    padding-bottom: 12px;
  }
  input{
    width: calc(100% - 200px);
    padding: 10px;
    font-size: 18px;
    color: #000;
    border: 1 solid #fff;
    heigth: 48px;
  }
  button{
    width: 20%;
    padding: 10px;
    font-size: 20px;
    margin-top: 20px;
  }
  select{
    width: 20%;
    margin-top: 20px;
  }
`;

const Container = styled.div`
  ${container};
`;

const List = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

class Movies extends React.Component {
  state = {
    form: {
      searchQuery: "",
      sortingOption: "desc"
    },
    fetchedMovies: []
  }

  onChangeHandler = (event, type) => {
    const updForm = {...this.state.form}
    updForm[type] = event.target.value
    this.setState({form: updForm})
  }

  submitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${this.state.form.searchQuery}`)
      .then(resp => {
        const movies = this.state.form.sortingOption === "desc" ? resp.data.data.sort((first, sec) => sec.Year - first.Year ) : resp.data.data.sort((first, sec) => first.Year - sec.Year)
        this.setState({fetchedMovies: movies})
      })
      .catch(err => {
        alert(err)
      })
  }

  render () {

    const fetchedMoviesList = this.state.fetchedMovies.map(movie => {
      return <Movie key={movie.imdbID} movie={movie}/>
    })
    
    return(
      <Root>
        <Container>
          <FormSearch onSubmit={this.submitHandler}>
            <label>Type Title</label>
            <input 
              type="text"
              placeholder="Type Title"
              value={this.state.form.searchQuery}
              onChange={event => this.onChangeHandler(event, 'searchQuery')}
            />
            <select 
              onChange={event => this.onChangeHandler(event, 'sortingOption')}>
              <option value="desc">
                Descending
              </option>
              <option value="asc">
                Ascending
              </option>
            </select>
            <button>Search</button>
          </FormSearch>
          <List>
            {fetchedMoviesList}
          </List>
        </Container>
      </Root>
    )
  }
};

export default Movies;
