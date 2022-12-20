import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({ list, page, setPage, movieList, addMovie, removeMovie }) => {
  //   console.log(movieList);
  const decrement = () => setPage(page-1);
  const increment = () => setPage(page+1);
  console.log(page)

  const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard movie={movie} addMovie={addMovie} list={list} removeMovie={removeMovie} />;
  });

  return (
    <div className="page">
      <h1>Dan's Movie Theater</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={() => page !== 1 && decrement()}>Previous</button>
        <button onClick={() => increment()}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
      <div className="btn-container">
        <button onClick={() => page !== 1 && decrement()}>Previous</button>
        <button onClick={() => increment()}>Next</button>
      </div>
    </div>
  );
};

export default MovieScreen;
