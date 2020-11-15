import {extend} from "../../../utils";
import {ActionType} from '../../action';

const initialState = {
  maxFilms: 8,
};

const onMaxFilms = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_MORE:
      return extend(state, {
        maxFilms: state.maxFilms + 8,
      });
  }
  return state;
};

export {onMaxFilms};
