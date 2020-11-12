import {extend} from "../../../utils";
import {ActionType} from '../../action';
import {ALL_GENRES} from '../../../const';
import {createList} from '../../../core';

// elfkbnm
/*import films from '../../../mocks/films';*/

const initialState = {
  genreActive: ALL_GENRES,
  films: [],
  genereList: [],
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
  }

  return state;
};

export {genreChange};
