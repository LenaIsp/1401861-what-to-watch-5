import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import MovieList from "../movie-list/movie-list";
import Tabs from "../tabs/tabs";
import ButtonAddFavorite from "../button-add-favorite/button-add-favorite";
import {connect} from 'react-redux';
import withTabs from "../../hocs/with-tabs/with-tabs";
import {createMoreLike} from '../../core';
import {fetchSingleMovie, fetchComments} from '../../store/api-action';
const WrapTabs = withTabs(Tabs);


class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
    this.onPageLoad = props.onPageLoad;
    this.onPageLoad = this.onPageLoad.bind(this);
  }

  componentDidMount() {
    this.onPageLoad(this.props.routes);
  }

  componentDidUpdate() {
    if (Number(this.props.routes) !== this.props.activeFilm.id) {
      this.onPageLoad(this.props.routes);
    }
  }

  render() {
    const {films, activeFilm, reviews} = this.props;
    const {id, name, posterImage, genre, released, rating, description, director, starring, backgroundImage, backgroundColor, scoresCount, runTime, isFavorite} = activeFilm;
    const MAX_FILM = 5;
    if (!starring) {
      return null;
    }
    return (
      <div>
        <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>
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
                  <Link href="add-review.html" className="btn btn--play movie-card__button" to={`/player/` + id}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
                    </svg>
                    <span>Play</span>
                  </Link>
                  <ButtonAddFavorite isFavorite={isFavorite} id={id} isPromo="false"/>
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

              <WrapTabs reviews={reviews} genre={genre} released={released} rating={rating} director={director} scoresCount={scoresCount} description={description} starring={starring} runTime= {runTime} />

            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieList films={films} maxFilms={MAX_FILM} id={id}/>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

MoviePage.propTypes = {
  films: PropTypes.array.isRequired,
  onPageLoad: PropTypes.func.isRequired,
  routes: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
  activeFilm: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.array.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      scoresCount: PropTypes.number.isRequired,
      runTime: PropTypes.number.isRequired,
    }),
    PropTypes.array
  ]),
};

const mapStateToProps = ({GENRE_CHANGE}) => ({
  films: createMoreLike(GENRE_CHANGE.films, GENRE_CHANGE.activeFilm.genre),
  activeFilm: GENRE_CHANGE.activeFilm,
  reviews: GENRE_CHANGE.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  onPageLoad(id) {
    dispatch(fetchComments(id));
    dispatch(fetchSingleMovie(id));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

