import React from 'react';
import PropTypes from 'prop-types';
import GenreListItem from '../genre-list-item/genre-list-item';

const GenreList = (props) => {
  const {genreActive, onGenreChange, genereList} = props;
  console.log(genereList)

  return (
    <>
      <ul className="catalog__genres-list">
        {genereList.map((film, index) => {
          const className = genreActive === film ? `catalog__genres-item--active` : ``;
          return <GenreListItem className={className} onGenreChange={onGenreChange} name={film} key={index}  />;
        })}
      </ul>
    </>
  );
};

GenreList.propTypes = {
  genreActive: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired
};

export default GenreList;
