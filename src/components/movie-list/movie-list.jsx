import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

const MovieList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MovieCard films = {film} key={i}/>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired
};

export default MovieList;
