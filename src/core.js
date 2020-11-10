import {ALL_GENRES} from './const';

// для redux
const sortedFilms = (state) => {
  const signular = state.genreActive;
  if (signular === ALL_GENRES) {
    return state.films;
  }
  return state.films.filter((film) => {
    return film.genre.toLowerCase() === signular.toLowerCase();
  });
};

const createList = (state) => {
  const genresList = state.map((film) => film.genre);
  const genereMap = Array.from(new Set(genresList));
  genereMap.sort().unshift(ALL_GENRES);
  return genereMap;
};

export {sortedFilms, createList};