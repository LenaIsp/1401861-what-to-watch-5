import React from "react";
import PropTypes from "prop-types";
import {convertDate} from "../../utils";

const TabsReviews = (props) => {
  const {reviews} = props;
  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.map((items, index) => (
            <div className="review" key={index}>
              <blockquote className="review__quote">
                <p className="review__text">{items.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{items.user.name}</cite>
                  <time className="review__date" dateTime="reviews.date">{convertDate(items.date)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{items.rating}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

TabsReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default TabsReviews;
