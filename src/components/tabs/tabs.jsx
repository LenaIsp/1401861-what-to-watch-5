import React from "react";
import PropTypes from "prop-types";
import TabsOverview from "../tabs-overview/tabs-overview";
import TabsDetails from "../tabs-details/tabs-details";
import TabsReviews from "../tabs-reviews/tabs-reviews";
import {TabsList} from "../../const";

const Tabs = (props) => {
  const {rating, director, scoresCount, description, starring, genre, released, runTime, handleClick, state} = props;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={state.tabs === TabsList.OVERVIEW ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={(evt) => handleClick(evt, TabsList.OVERVIEW)}>
            <a href="#" className="movie-nav__link">{TabsList.OVERVIEW}</a>
          </li>
          <li className={state.tabs === TabsList.DETAILS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={(evt) => handleClick(evt, TabsList.DETAILS)}>
            <a href="#" className="movie-nav__link">{TabsList.DETAILS}</a>
          </li>
          <li className={state.tabs === TabsList.REVIEWS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={(evt) => handleClick(evt, TabsList.REVIEWS)}>
            <a href="#" className="movie-nav__link">{TabsList.REVIEWS}</a>
          </li>
        </ul>
      </nav>
      {(() => {
        switch (state.tabs) {
          case TabsList.OVERVIEW : return (<TabsOverview rating={rating} director={director} scoresCount={scoresCount} description={description} starring={starring}/>);
          case TabsList.DETAILS : return (<TabsDetails runTime={runTime} released={released} genre={genre} director={director} starring={starring}/>);
          case TabsList.REVIEWS : return (<TabsReviews runTime={runTime} released={released} genre={genre} director={director} starring={starring}/>);
          default : return null;
        }
      })()}

    </div>
  );
};

Tabs.propTypes = {
  rating: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  scoresCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  state: PropTypes.array.isRequired,
};

export default Tabs;
