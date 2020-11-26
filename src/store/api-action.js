import {loadMovie, requireAuthorization, redirectToRoute, loadSingleMovie, loadMovieComments, loadPromo, loadUser, loadFavorites, setDataIsSending, setDataSendError} from "./action";
import {AuthorizationStatus} from "../const";
import {adapterFilmsToClient, adapterUserToClient} from '../utils';

// загрузка всех фильмов
export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(loadMovie(data.map((film) => adapterFilmsToClient(film))));
    })
    .catch(() => {
      throw Error(`Ошибка загрузки фильмов`);
    })
);

// загрузка одного фильма
export const fetchSingleMovie = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(loadSingleMovie(adapterFilmsToClient(data)));
    })
    .catch(() => {
      throw Error(`Ошибка загрузки фильма`);
    })
);

// загрузка промо
export const fetchMoviePromo = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => {
      dispatch(loadPromo(adapterFilmsToClient(data)));
    })
    .catch(() => {
      throw Error(`Ошибка загрузки промо`);
    })
);

// загрузка списка комментариев
export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(loadMovieComments(data));
    })
    .catch(() => {
      throw Error(`Ошибка загрузки комментариев`);
    })
);


// проверка авторизации
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadUser(adapterUserToClient(data)));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

// отправляем данные на сервер
export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch(() => {
      throw Error(`Ошибка отправки данных`);
    })
);

// добавляем в избранное
export const addFavorite = (id, status, isPromo) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => {
      if (isPromo === `true`) {
        dispatch(loadPromo(adapterFilmsToClient(data)));
      } else {
        dispatch(loadSingleMovie(adapterFilmsToClient(data)));
        dispatch(fetchMoviePromo());
      }
    })
    .catch(() => {
      throw Error(`Ошибка отправки избранного`);
    })
);

export const addReview = (id, rating, comment) => (dispatch, _getState, api) => (
  api.post(`/comments` + `/${id}`, {rating, comment})
    .then(() => {
      dispatch(setDataSendError(false));
      dispatch(redirectToRoute(`/films` + `/${id}`));
      dispatch(setDataIsSending(false));
    })
    .catch(() => {
      dispatch(setDataIsSending(false));
      dispatch(setDataSendError(true));
    })
);

// загрузка избранных фильмов
export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      dispatch(loadFavorites(data.map((film) => adapterFilmsToClient(film))));
    })
    .catch(() => {
      throw Error(`Ошибка загрузки избранных фильмов`);
    })
);


