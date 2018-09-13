# Setup
`yarn`

# Development
`yarn dev`

# Tasks

- `PrimaryNav`'s Home link should open `/` page

- User should be able to search for movies:

  - Add a search form to `/movies` page
  - Query an external api: [https://jsonmock.hackerrank.com/api/movies/search/?Title=substr](https://jsonmock.hackerrank.com/api/movies/search/?Title=substr) (replace substr with your query)
  - Results should be ordered by year (either asc or desc)
  - You should use already existing `Movies` and `Movie` components to show query results
  - You can add any library you need
  - State management solution is up to you

- Search results should be displayed in a 4 column grid on wider viewports
- Each `Movie` component should render at least title, year, and a link to imbd that opens in a new tab
 

## Info
Sample movie entities returned by [https://jsonmock.hackerrank.com/api/movies/search/?Title=substr](https://jsonmock.hackerrank.com/api/movies/search/?Title=substr):

```json

[
  {
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
    "Title": "Italian Spiderman",
    "Type": "movie",
    "Year": 2007,
    "imdbID": "tt2705436"
  },
  {
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
    "Title": "Superman, Spiderman or Batman",
    "Type": "movie",
    "Year": 2011,
    "imdbID": "tt2084949"
  },
  {
    "Poster": "N/A",
    "Title": "Spiderman",
    "Type": "movie",
    "Year": 1990,
    "imdbID": "tt0100669"
  }
]
``` 
