import {loadMovie, requireAuthorization, redirectToRoute, loadSingleMovie, loadMovieComments, loadPromo} from "./action";
import {AuthorizationStatus} from "../const";
import {adapterFilmsToClient} from '../utils';


// загрузка всех фильмов
export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(loadMovie(data.map((film) => adapterFilmsToClient(film))))
    })
    .catch(() => {
      throw Error(`Ошибка загрузки фильмов`);
    })
);

// загрузка одного фильма
export const fetchSingleMovie = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => {
      dispatch(loadSingleMovie(adapterFilmsToClient(data)))
    })
    .catch(() => {
      throw Error(`Ошибка загрузки фильма`);
    })
);

// загрузка промо
export const fetchMoviePromo = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => {
      dispatch(loadPromo(adapterFilmsToClient(data)))
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
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      throw Error(`Ошибка авторизации`)
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


