import {extend} from "../../../utils";
import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  id: 1,
  email: ``,
  name: ``,
  avatarUrl: ``,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER:
      return extend(state, action.payload);
  }

  return state;
};

export {user};
