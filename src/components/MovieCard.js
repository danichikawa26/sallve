import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
  const movieImage = props.movieImage === "N/A" ? "https://dunlite.com.au/wp-content/uploads/2019/04/placeholder.jpg" : props.movieImage 
  return (
    <div className="poster">
      <img src={movieImage} alt="movie-poster"/>
    </div>
  );
}


export default MovieCard;