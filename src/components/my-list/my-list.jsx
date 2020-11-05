import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";
import Header from "../header/header";
import Footer from "../footer/footer";

const myList = (props) => {
  const {films} = props;
  return (
    <div className="user-page">
      <Header login={true} avatar={true}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <MovieList films = {films} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

myList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default myList;
