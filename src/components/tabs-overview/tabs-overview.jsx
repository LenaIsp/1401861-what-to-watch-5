import React from "react";
import PropTypes from "prop-types";

const TabsOverview = (props) => {
  const {rating, director, scoresCount, description, starring} = props;
  const starringLastName = starring.length - 1;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {(() => {
              switch (true) {
                case rating >= 0 && rating < 3 : return (`Bad`);
                case rating >= 3 && rating < 5 : return (`Normal`);
                case rating >= 5 && rating < 8 : return (`Good`);
                case rating >= 8 && rating < 10 : return (`Very good`);
                case rating === 10: return (`Awesome`);
                default : return null;
              }
            })()}
          </span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="movie-card__starring">
          <strong>Starring: {
            starring.map((names, index) => (
              index !== starringLastName
                ? ` ` + names + `,`
                : ` ` + names + ` and other`
            ))}
          </strong>
        </p>
      </div>
    </>
  );
};

TabsOverview.propTypes = {
  rating: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  scoresCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
};

export default TabsOverview;
