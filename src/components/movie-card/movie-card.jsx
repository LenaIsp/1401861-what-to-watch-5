import React from "react";
import {Link} from "react-router-dom";
import Video from "../video/video";
import PropTypes from "prop-types";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const MovieCard = (props) => {
  const {films} = props;
  const {previewImage, name, id, previewVideoLink} = films;
  const VideoWrap = withActiveItem(Video);
  return (
    <article className="small-movie-card catalog__movies-card">
      <VideoWrap videoSrc={previewVideoLink} posterSrc={previewImage} width="280" height="175" />
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/` + id}>{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  films: PropTypes.shape({
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  })
};

export default MovieCard;
