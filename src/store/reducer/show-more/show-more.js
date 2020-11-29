import {extend} from "../../../utils";
import {ActionType} from '../../action';

const COUNT_FILMS = 8;

const initialState = {
  maxFilms: COUNT_FILMS,
};

const onMaxFilms = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_MORE:
      return extend(state, {
        maxFilms: state.maxFilms + COUNT_FILMS,
      });
  }
  return state;
};

export {onMaxFilms};
