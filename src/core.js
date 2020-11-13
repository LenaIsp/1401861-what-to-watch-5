import {ALL_GENRES} from './const';
import {createSelector} from "reselect";

const selectAll = (state) => state;
const getGenereSelector = createSelector(
    selectAll,
    (state) => {
      const signular = state.genreActive;
      if (signular === ALL_GENRES) {
        return state.films;
      }
      return state.films.filter((it) => {
        return it.genre.toLowerCase() === signular.toLowerCase();
      });
    }
);

const createList = (state) => {
  const genresList = state.map((film) => film.genre);
  const genereMap = Array.from(new Set(genresList));
  genereMap.sort().unshift(ALL_GENRES);
  return genereMap;
};

const createMoreLike = (films, generes) => {
  return films.filter((it) => {
    return it.genre === generes;
  });
};

export {createList, createMoreLike, getGenereSelector};
