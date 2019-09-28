import React from 'react';
import axios from 'axios';
import './MovieDetails.css';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

class MovieDetails extends React.Component {
  state = {
    imdbID: '',
    movieName: '',
    releaseDate: '',
    genres: '',
    poster: '',
    plot: '',
    actors: '',
    director: '',
    writer: '',
    awards: '',
    ratings: [],
   };

  async componentDidMount() {
    await axios.get('https://www.omdbapi.com/?apikey=4e697a41&', {
      params: { i: this.props.match.params.imdbID },
    }).then(response => {
      this.setState({ 
        imdbID: response.data.imdbID ,
        movieName: response.data.Title,
        releaseDate: response.data.Year,
        genres: response.data.Genre,
        poster: response.data.Poster,
        plot: response.data.Plot,
        actors: response.data.Actors,
        director: response.data.Director,
        writer: response.data.Writer,
        awards: response.data.Awards,
        ratings: response.data.Ratings,
      });
    })
  }

  render() {
    const poster = this.state.poster === "N/A" ? "https://dunlite.com.au/wp-content/uploads/2019/04/placeholder.jpg" : this.state.poster 
    return (
      <div className="ui container">
        <div className="sallve-title-details">
          <img src="https://cdn.shopify.com/s/files/1/0074/3486/2639/files/marca_sallve-2_a948a523-fda3-4a3c-a3f6-9faf1bc01317.gif" alt="logo"/>
          <h1>movies</h1>
        </div>
        <div className="upper-content">
          <div className="basic-info">
            <h1>{this.state.movieName}</h1>
            <h3>{this.state.releaseDate} | {this.state.genres} </h3>
            <h4>Awards: {this.state.awards}</h4>
          </div>
          <Link to="/" className="back-desk">
            <div className="ui animated button" tabIndex="0">
              <div className="visible content">Back</div>
                <div className="hidden content">
                  <i className="left arrow icon"></i>
                </div>
            </div>
          </Link>
        </div>
        <div className="body-content">
          <img src={poster} alt="poster"/>
          <div className="more-info">
            <p><strong>Plot:</strong> {this.state.plot}</p>
            <p><strong>Actors:</strong> {this.state.actors}</p>
            <p><strong>Director:</strong> {this.state.director}</p>
            <p><strong>Writer:</strong> {this.state.writer}</p>
            <p style={{ marginBottom: '5px' }}><strong>Ratings:</strong></p>
              <div className="ratings">
                {this.state.ratings.map((rating) => {
                  return (
                    <div key={rating.Value} className="rating">
                      <p>{rating.Source}</p>
                      <StarRatings rating={parseInt(rating.Value.replace(/\D/,'').substring(0,2), 10)/20} starDimension='20px' 
                                   starSpacing='1px' starRatedColor='#E4BB24' starEmptyColor='rgb(203, 211, 227)'/>
                    </div>
                  );
                })}
              </div>
            <Link to="/" className="back-mobile">
              <div className="ui animated button" tabIndex="0">
                <div className="visible content">Back</div>
                  <div className="hidden content">
                    <i className="left arrow icon"></i>
                  </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;