import React from "react";
import PropTypes from "prop-types";

const TabsOverview = (props) => {
  const {rating, director, scoresCount, description, starring} = props;
  const starringLastName = starring.length - 1;
  const Ratings = {
    START: 0,
    BAD: 3,
    NORMAL: 5,
    GOOD: 8,
    VERY_GOOD: 10,
  };

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {(() => {
              switch (true) {
                case rating >= Ratings.START && rating < Ratings.BAD : return (`Bad`);
                case rating >= Ratings.BAD && rating < Ratings.NORMAL : return (`Normal`);
                case rating >= Ratings.NORMAL && rating < Ratings.GOOD : return (`Good`);
                case rating >= Ratings.GOOD && rating < Ratings.VERY_GOOD : return (`Very good`);
                case rating === Ratings.VERY_GOOD: return (`Awesome`);
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
