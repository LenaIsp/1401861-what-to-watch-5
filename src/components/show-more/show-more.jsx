import React from "react";
import PropTypes from "prop-types";

const ShowMore = (props) => {
  const {onTest, films, testState} = props;
  console.log(films.length)
  if (testState >= films.length) {
    return null 
  }
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onTest}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  films: PropTypes.array.isRequired,
  genreChangeAction: PropTypes.func.isRequired,
  genreActive: PropTypes.string.isRequired,
  genereList: PropTypes.array.isRequired,
  onTest: PropTypes.func.isRequired,
  testState: PropTypes.number.isRequired,
};

export default ShowMore
