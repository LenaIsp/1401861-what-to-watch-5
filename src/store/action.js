export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
  LOAD_MOVIE: `LOAD_MOVIE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  
};

// функции для изменения стейта
export const changeGenre = (name) => ({
  type: ActionType.CHANGE_GENRE,
  payload: name,
});

export const changeTest = (count) => ({
  type: ActionType.SHOW_MORE,
  payload: count
});

export const loadMovie = (questions) => ({
  type: ActionType.LOAD_MOVIE,
  payload: questions,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
