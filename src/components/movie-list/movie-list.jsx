import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const MovieList = (props) => {
  const {films} = props;
  const MovieCardWrap = withActiveItem(MovieCard);
  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MovieCardWrap films={film} key={i}/>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired
};

export default MovieList;
