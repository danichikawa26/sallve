import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import './App.css';

class App extends React.Component {
  state = {
    movies: [], 
  };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://www.omdbapi.com/?apikey=4e697a41&', {
      params: { s: term },
    });
    this.setState({ movies: response.data.Search });
  }

  onClickHandler = (id) => {
    this.props.history.push(`/movies/${id}`)
  }

  render() {
    return (
      <div className={"home " + (this.state.movies.length === 0 ? 'center' : '')}>
        <div className="search-display">
          <div className="sallve-title">
            <img src="http://cdn.shopify.com/s/files/1/0074/3486/2639/files/marca_sallve-2_a948a523-fda3-4a3c-a3f6-9faf1bc01317.gif" alt="logo"/>
            <h1>movies</h1>
          </div>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className="ui stackable four column grid container">
          {this.state.movies.map(movie => {
            return (
              <div className="column" onClick={() => this.onClickHandler(movie.imdbID)} key={movie.imdbID}>
                <MovieCard movieImage={movie.Poster} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;