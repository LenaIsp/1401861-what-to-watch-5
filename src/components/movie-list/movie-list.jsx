import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

const MovieList = (props) => {
  const {films, testState} = props;
  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        i+1 > testState
        ? null
        : <MovieCard films={film} key={i}/>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired
};

export default MovieList;
