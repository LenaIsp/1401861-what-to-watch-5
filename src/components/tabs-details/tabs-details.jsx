import React from "react";
import PropTypes from "prop-types";
import {convertMinutes} from "../../utils";

const TabsDetails = (props) => {
  const {director, released, starring, genre, runTime} = props;
  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            {starring.map((names, index) => (
              index + 1 !== starring.length
                ? <span className="movie-card__details-value" key={index}>{names},<br /></span>
                : <span className="movie-card__details-value" key={index}>{names}</span>
            ))}
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{convertMinutes(runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </>
  );
};

TabsDetails.propTypes = {
  director: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  starring: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  runTime: PropTypes.number.isRequired,
};

export default TabsDetails;
