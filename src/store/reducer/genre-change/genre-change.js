import {extend} from "../../../utils";
import films from '../../../mocks/films';
import {ActionType} from '../../action';
import {ALL_GENRES} from '../../../const';
import {createList} from '../../../core';

const initialState = {
  genreActive: ALL_GENRES,
  films,
  genereList: createList(films)
};

const genreChange = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genreActive: action.payload,
      });

  }

  return state;
};

export {genreChange};