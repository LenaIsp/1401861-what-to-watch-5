import React from "react";
import PropTypes from "prop-types";

const ShowMore = (props) => {
  const {changeCountFilmsAction, films, maxFilms} = props;
  if (maxFilms >= films.length) {
    return null;
  }
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={changeCountFilmsAction}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  changeCountFilmsAction: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
  maxFilms: PropTypes.number.isRequired,
};

export default ShowMore;
