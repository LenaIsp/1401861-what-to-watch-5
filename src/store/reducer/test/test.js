import {extend} from "../../../utils";
import {ActionType} from '../../action';

const initialState = {
  testState: 0,
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TEST:
      return extend(state, {
        testState: state.testState + 1,
      });
  }
  return state;
};

export {test};
