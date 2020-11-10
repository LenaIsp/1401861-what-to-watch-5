import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import MovieList from "../movie-list/movie-list";
import {connect} from 'react-redux';

const MoviePage = (props) => {
  const {films, routes} = props;
  const idRoute = Number(routes.match.params.id);
  const {id, title, previewSrc, genre, year, ratings, description, director, starring} = films[idRoute - 1];


  return (
    <div>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header avatar={true} login={false}/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
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
              <img src={previewSrc} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">8,9</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">Very good</span>
                  <span className="movie-rating__count">{ratings} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{description}</p>
                <p className="movie-card__director"><strong>Director: {director}</strong></p>
                <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieList films = {films} />
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
    title: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    ratings: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired).isRequired
};

const mapStateToProps = (state) => ({
  films: state.films
});

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
