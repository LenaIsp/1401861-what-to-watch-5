import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

const MovieList = (props) => {
  const {films, maxFilms, id} = props;
  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        i + 1 > maxFilms || film.id === id
          ? null
          : <MovieCard films={film} key={i}/>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  maxFilms: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.node
  ]),
  id: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.node
  ]),
};

export default MovieList;
