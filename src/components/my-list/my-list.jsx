import React, {useEffect} from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";
import Header from "../header/header";
import Footer from "../footer/footer";
import {connect} from 'react-redux';
import {fetchFavorites} from '../../store/api-action';

const MyList = (props) => {
  const {onFavoritesLoad, favorites} = props;

  if (!favorites) {
    return null;
  }
  useEffect(() => {
    onFavoritesLoad();
  }, []);

  return (
    <div className="user-page">
      <Header login={true} avatar={true}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <MovieList films = {favorites} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

MyList.propTypes = {
  onFavoritesLoad: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
};

const mapStateToProps = ({GENRE_CHANGE}) => ({
  films: GENRE_CHANGE.films,
  favorites: GENRE_CHANGE.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  onFavoritesLoad() {
    dispatch(fetchFavorites());
  }
});
export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
