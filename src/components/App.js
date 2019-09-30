import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import Logo from './common/Logo';
import './App.css';

class App extends React.Component {
  state = {
    movies: [],
    error: "" 
  };

  isSearchTermAlphanumeric = (searchTerm) => {
    return RegExp(/[\w]|_/g).test(searchTerm)
  }

  onSearchSubmit = async (term) => {
    if (!this.isSearchTermAlphanumeric(term)) {
      this.setState({error: "tente usar só letras ou números na sua busca :)", movies: []})
      return;
    }

    const response = await axios.get('https://www.omdbapi.com/?apikey=4e697a41&', {
      params: { s: term },
    });
    if (response.data.Search) this.setState({ movies: response.data.Search, error: "" });
    else this.setState({error: "não achamos seu filme :/", movies: []})
  }

  onClickHandler = (id) => {
    this.props.history.push(`/movies/${id}`)
  }

  render() {
    return (
      <div className={"home " + (this.state.movies.length === 0 ? 'center' : '')}>
        <div className="search-display">
          <Logo/>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>

        <h3>{this.state.error}</h3>
        
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