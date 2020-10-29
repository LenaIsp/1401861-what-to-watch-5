import React from 'react';
import PropTypes from 'prop-types';


const GenreListItem = (props) => {
  const {className, name, onGenreChange} = props;
  return (
    <li className={`catalog__genres-item ${className}`}>
      <a className="catalog__genres-link" href="#" onClick={(evt) => {
        evt.preventDefault();
        onGenreChange(name);
      }}>{name}</a>
    </li>
  );
};

GenreListItem.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired
};

export default GenreListItem;
