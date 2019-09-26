import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  return (
    <div className="poster">
      <img src={props.movieImage} alt="movie-poster"/>
    </div>
  );
}


export default MovieCard;