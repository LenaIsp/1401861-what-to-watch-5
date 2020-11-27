import {extend} from "../../../utils";
import {ActionType} from '../../action';
import {ALL_GENRES} from '../../../const';

const initialState = {
  genreActive: ALL_GENRES,
  films: [],
  genereList: [],
  activeFilm: [],
  reviews: [],
  promo: [],
  favorites: [],
  isDataSending: false,
  isDataSendError: false,
};

const genreChange = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genreActive: action.payload,
      });

    case ActionType.LOAD_MOVIE:
      return extend(state, {
        films: action.payload,
      });

    case ActionType.LOAD_SINGLE_MOVIE:
      return extend(state, {
        activeFilm: action.payload,
      });

    case ActionType.LOAD_MOVIE_COMMENTS:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.LOAD_PROMO:
      return extend(state, {
        promo: action.payload,
      });

    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });

    case ActionType.SET_DATA_IS_SENDING:
      return extend(state, {
        isDataSending: action.payload,
      });

    case ActionType.SET_DATA_SEND_EROR:
      return extend(state, {
        isDataSendError: action.payload,
      });
  }

  return state;
};

export {genreChange};
