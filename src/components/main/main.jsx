import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import MovieList from "../movie-list/movie-list";
import GenreList from '../genre-list/genre-list';
import {Link} from "react-router-dom";
// для redux
import {connect} from 'react-redux';
import {changeGenre, changeTest} from '../../store/action';
import {createList, getGenereSelector} from '../../core';

const Main = (props) => {
  const {films, genreActive, genreChangeAction, onTest, testState, genereList} = props;
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header avatar={true} login={false}/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">комедия</span>
                <span className="movie-card__year">2017</span>
              </p>
              <div className="movie-card__buttons">
                <Link className="btn btn--play movie-card__button" to={`player`} type="button">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link className="btn btn--list movie-card__button" to={`mylist`} type="button">
                  <svg width="19px" height="20px" viewBox="0 0 19 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"></polygon>
                    </g>
                  </svg>
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

          <GenreList genereList={genereList} genreActive={genreActive} genreChangeAction={genreChangeAction} />

          <MovieList films={films} testState={testState}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button" onClick={onTest}>{testState}</button>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  films: PropTypes.array.isRequired,
  genreChangeAction: PropTypes.func.isRequired,
  genreActive: PropTypes.string.isRequired,
  genereList: PropTypes.array.isRequired,
  onTest: PropTypes.func.isRequired,
  testState: PropTypes.number.isRequired,
};

const mapStateToProps = ({GENRE_CHANGE, TEST}) => ({
  genreActive: GENRE_CHANGE.genreActive,
  films: getGenereSelector(GENRE_CHANGE),
  genereList: createList(GENRE_CHANGE.films),
  testState: TEST.testState,
});

const mapDispatchToProps = (dispatch) => ({
  genreChangeAction(name) {
    dispatch(changeGenre(name));
  },
  onTest(name) {
    dispatch(changeTest(name));
  }
});


export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
