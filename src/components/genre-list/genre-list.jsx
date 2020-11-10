import React from 'react';
import PropTypes from 'prop-types';
import GenreListItem from '../genre-list-item/genre-list-item';

const GenreList = (props) => {
  const {genreActive, genreChangeAction, genereList} = props;
  return (
    <>
      <ul className="catalog__genres-list">
        {genereList.map((film, index) => {
          const className = genreActive === film ? `catalog__genres-item--active` : ``;
          return <GenreListItem className={className} genreChangeAction={genreChangeAction} name={film} key={index} />;
        })}
      </ul>
    </>
  );
};

GenreList.propTypes = {
  genreActive: PropTypes.string.isRequired,
  genreChangeAction: PropTypes.func.isRequired,
  genereList: PropTypes.array.isRequired,
};

export default GenreList;
