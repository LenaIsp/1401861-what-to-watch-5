import {extend} from "../../../utils";
import {ActionType} from '../../action';

const initialState = {
  testState: 8,
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_MORE:
      return extend(state, {
        testState: state.testState + 8,
      });
  }
  return state;
};

export {test};
