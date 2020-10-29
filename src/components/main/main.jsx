import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";
import GenreList from '../genre-list/genre-list';
import {Link} from "react-router-dom";
// для redux
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {sortedFilms} from '../../store/reducer';

const Main = (props) => {
  const {films, genreActive, onGenreChange} = props;
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">Grand Budapest</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">комедия</span>
                <span className="movie-card__year">2017</span>
              </p>
              <div className="movie-card__buttons">
                <Link className="btn btn--play movie-card__button" to={`player`} type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19"></svg>
                  <span>Play</span>
                </Link>
                <Link className="btn btn--list movie-card__button" to={`mylist`} type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20"></svg>
                  <span>My list</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList genreActive={genreActive} onGenreChange={onGenreChange} />

          <MovieList films = {films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  films: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  genreActive: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  genreActive: state.genreActive,
  films: sortedFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(name) {
    dispatch(ActionCreator.changeGenre(name));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
