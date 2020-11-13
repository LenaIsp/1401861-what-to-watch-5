import React from "react";
import PropTypes from "prop-types";

const TabsReviews = () => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.</p>
            <footer className="review__details">
              <cite className="review__author">Kate Muir</cite>
              <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,9</div>
        </div>
      </div>

      <div className="movie-card__reviews-col">

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

            <footer className="review__details">
              <cite className="review__author">Matthew Lickona</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,2</div>
        </div>

      </div>
    </div>
  );
};

TabsReviews.propTypes = {
  rating: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  scoresCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
};

export default TabsReviews;
