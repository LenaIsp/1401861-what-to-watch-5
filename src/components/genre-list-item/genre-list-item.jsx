import React from 'react';
import PropTypes from 'prop-types';


const GenreListItem = (props) => {
  const {className, name, genreChangeAction} = props;
  return (
    <li className={`catalog__genres-item ${className}`}>
      <a className="catalog__genres-link" href="#" onClick={(evt) => {
        evt.preventDefault();
        genreChangeAction(name);
      }}>{name}</a>
    </li>
  );
};

GenreListItem.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  genreChangeAction: PropTypes.func.isRequired
};

export default GenreListItem;
