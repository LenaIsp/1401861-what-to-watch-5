import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Header from "../header/header";
import {connect} from 'react-redux';
import {addReview} from '../../store/api-action';
import {setDataIsSending} from "../../store/action";

const REVIEW_RATINGS = [1, 2, 3, 4, 5];

const AddRewiev = (props) => {
  const { onFormSubmit, onReviewChange, onRatingChange, isDataSending, isDataSendError, isValid, rating, reviewText, films, routes,
  } = props;
  const filmsId = films[routes.match.params.id - 1]
  const {id} = filmsId

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit(id, rating, reviewText);
  };

  const getMessage = () => {
    if (isDataSendError) {
      return (
        <p className="movie-card__text">Error! Please, try again later...</p>
      );
    }
    return ``;
  };

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor: filmsId.backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={filmsId.backgroundImage} alt="title" />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header avatar={true} login={false}>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/` + routes.match.params.id}>{filmsId.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={filmsId.posterImage} alt={filmsId.title} width="218"
            height="327" />
        </div>
      </div>

      <div className="add-review">
        {getMessage()}
        <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {REVIEW_RATINGS.map((reviewRating) => {
                return (
                  <Fragment key={reviewRating}>
                    <input className="rating__input" id={`star-${reviewRating}`} type="radio" name="rating" value={`${reviewRating}`}
                      checked={reviewRating === rating}
                      onChange={onRatingChange}
                      disabled={isDataSending}
                    />
                    <label className="rating__label" htmlFor={`star-${reviewRating}`}>{`Rating ${reviewRating}`}</label>
                  </Fragment>
                );
              })}

            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="reviewText" id="reviewText"
              placeholder="Review text"
              onChange={onReviewChange}
              disabled={isDataSending}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={(!isValid || isDataSending)}>Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

AddRewiev.propTypes = {
  films: PropTypes.array.isRequired,
  routes: PropTypes.object.isRequired
};

const mapStateToProps = ({GENRE_CHANGE}) => ({
  films: GENRE_CHANGE.films,
  isDataSending: GENRE_CHANGE.isDataSending, 
  isDataSendError: GENRE_CHANGE.isDataSendError
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(id, rating, reviewText) {
    dispatch(setDataIsSending(true));
    dispatch(addReview(id, rating, reviewText));
  }
});

export {AddRewiev};
export default connect(mapStateToProps, mapDispatchToProps)(AddRewiev);
