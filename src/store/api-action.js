import {loadMovie, requireAuthorization, redirectToRoute} from "./action";
import {AuthorizationStatus} from "../const";
import {adapterFilmsToClient} from '../utils';


// загрузка всех фильмов
export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadMovie(data.map((film) => adapterFilmsToClient(film)))))
);


// проверка авторизации
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

// отправляем данные на сервер
export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch(() => {
      throw Error(`Ошибка авторизации`);
    })
);
