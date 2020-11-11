import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import AddReviewForm from "../add-review-form/add-review-form";
import Header from "../header/header";
import {connect} from 'react-redux';

const AddRewiev = (props) => {
  const {films, routes} = props;
  const idRoute = Number(routes.match.params.id);
  const {id, name, poster_image} = films[idRoute - 1];
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="title" />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header avatar={true} login={false}>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/` + id}>{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster_image} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm films={films}/>
      </div>
    </section>
  );
};

AddRewiev.propTypes = {
  films: PropTypes.array.isRequired,
  routes: PropTypes.object.isRequired
};

const mapStateToProps = ({GENRE_CHANGE}) => ({
  films: GENRE_CHANGE.films
});

export {AddRewiev};
export default connect(mapStateToProps)(AddRewiev);
