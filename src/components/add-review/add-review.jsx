import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import AddReviewForm from "../add-review-form/add-review-form";
import Header from "../header/header";

const AddRewiev = (props) => {
  const {films, routes} = props;
  const idRoute = Number(routes.match.params.id);
  const {id, title, previewSrc} = films[idRoute - 1];
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
                <Link className="breadcrumbs__link" to={`/films/` + id}>{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={previewSrc} alt={title} width="218" height="327" />
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

export default AddRewiev;
