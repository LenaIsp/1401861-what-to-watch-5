import React from "react";
import {Link} from "react-router-dom";
import Video from "../video/video";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {films, onMouseEnter, onMouseLeave, isActive} = props;
  const {posterSrc, title, id, videoSrc} = films;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        <Video videoSrc={videoSrc} posterSrc={posterSrc} isActive={isActive} width="280" height="175"></Video>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`films/` + id}>{title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  films: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    videoSrc: PropTypes.string.isRequired,
  })
};

export default MovieCard;
