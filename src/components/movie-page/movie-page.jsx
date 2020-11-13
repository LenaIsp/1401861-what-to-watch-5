import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import MovieList from "../movie-list/movie-list";
import Tabs from "../tabs/tabs";
import {connect} from 'react-redux';
import withTabs from "../../hocs/with-tabs/with-tabs";
import {createMoreLike} from '../../core';

const MoviePage = (props) => {
  const {films, routes} = props;
  const idRoute = Number(routes.match.params.id);
  const {id, name, posterImage, genre, released, rating, description, director, starring, backgroundImage, backgroundColor, scoresCount, runTime} = films[idRoute - 1];
  const divStyle = {
    backgroundColors: backgroundColor
  };
  const filmsMoreLike = createMoreLike(films, genre);
  const WrapTabs = withTabs(Tabs);

  return (
    <div>
      <section className="movie-card movie-card--full" style={divStyle}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header avatar={true} login={false}/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg width="19px" height="20px" viewBox="0 0 19 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"></polygon>
                    </g>
                  </svg>
                  <span>My list</span>
                </button>
                <Link href="add-review.html" className="btn movie-card__button" to={`/films/` + id + `/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <WrapTabs genre={genre} released={released} rating={rating} director={director} scoresCount={scoresCount} description={description} starring={starring} runTime= {runTime} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieList films = {filmsMoreLike} />
        </section>
        <Footer />
      </div>
    </div>
  );
};

MoviePage.propTypes = {
  routes: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    scoresCount: PropTypes.string.isRequired,
    runTime: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

const mapStateToProps = ({GENRE_CHANGE}) => ({
  films: GENRE_CHANGE.films
});

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
