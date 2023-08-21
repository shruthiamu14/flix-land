import React from 'react'

function MovieCard({movie}) {
  return (
    <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
        </div>
        <div>
            <spam>{movie.Type}</spam>
            <h3>{movie.Title}</h3>
        </div>
    </div>
  );
}

export default MovieCard;
