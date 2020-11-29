export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE: `SHOW_MORE`,

  LOAD_MOVIE: `LOAD_MOVIE`,
  LOAD_SINGLE_MOVIE: `LOAD_SINGLE_MOVIE`,
  LOAD_MOVIE_COMMENTS: `LOAD_MOVIE_COMMENTS`,
  LOAD_PROMO: `LOAD_PROMO`,

  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_USER: `LOAD_USER`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,

  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,

  SET_DATA_IS_SENDING: `SET_DATA_IS_SENDING`,
  SET_DATA_SEND_EROR: `SET_DATA_SEND_EROR`,
};

// функции для изменения стейта
export const changeGenre = (name) => ({
  type: ActionType.CHANGE_GENRE,
  payload: name,
});

export const changeCountFilms = (count) => ({
  type: ActionType.SHOW_MORE,
  payload: count
});

export const loadMovie = (films) => ({
  type: ActionType.LOAD_MOVIE,
  payload: films,
});

export const loadSingleMovie = (film) => ({
  type: ActionType.LOAD_SINGLE_MOVIE,
  payload: film,
});

export const loadMovieComments = (comment) => ({
  type: ActionType.LOAD_MOVIE_COMMENTS,
  payload: comment,
});

export const loadPromo = (film) => ({
  type: ActionType.LOAD_PROMO,
  payload: film,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadUser = (status) => ({
  type: ActionType.LOAD_USER,
  payload: status,
});

export const loadFavorites = (favorites) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: favorites,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setDataIsSending = (bool) => ({
  type: ActionType.SET_DATA_IS_SENDING,
  payload: bool
});

export const setDataSendError = (bool) => ({
  type: ActionType.SET_DATA_SEND_EROR,
  payload: bool
});
