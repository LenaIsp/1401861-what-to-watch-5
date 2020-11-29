import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import ButtonAddFavorite from "../button-add-favorite/button-add-favorite";
import MovieList from "../movie-list/movie-list";
import GenreList from '../genre-list/genre-list';
import ShowMore from '../show-more/show-more';
import {Link} from "react-router-dom";
// для redux
import {connect} from 'react-redux';
import {changeGenre, changeCountFilms} from '../../store/action';
import {createList, getGenereSelector} from '../../core';

const Main = (props) => {
  const {films, genreActive, genreChangeAction, changeCountFilmsAction, maxFilms, genereList, promo} = props;
  const {name, posterImage, backgroundImage, genre, released, id, isFavorite} = promo;
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header avatar={true} login={false}/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <Link className="btn btn--play movie-card__button" to={`/player/${id}`} type="button">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <ButtonAddFavorite isFavorite={isFavorite} id={id} isPromo="true"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList genereList={genereList} genreActive={genreActive} genreChangeAction={genreChangeAction} />
          <MovieList films={films} maxFilms={maxFilms}/>
          <ShowMore films={films} changeCountFilmsAction={changeCountFilmsAction} maxFilms={maxFilms}/>
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
  changeCountFilmsAction: PropTypes.func.isRequired,
  maxFilms: PropTypes.number.isRequired,
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = ({GENRE_CHANGE, SHOW_MORE}) => ({
  genreActive: GENRE_CHANGE.genreActive,
  films: getGenereSelector(GENRE_CHANGE),
  genereList: createList(GENRE_CHANGE.films),
  maxFilms: SHOW_MORE.maxFilms,
  promo: GENRE_CHANGE.promo,
});

const mapDispatchToProps = (dispatch) => ({
  genreChangeAction(name) {
    dispatch(changeGenre(name));
  },
  changeCountFilmsAction(name) {
    dispatch(changeCountFilms(name));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
