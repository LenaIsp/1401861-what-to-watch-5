import {combineReducers} from "redux";
import {genreChange} from "./genre-change/genre-change";
import {test} from "./test/test";
import {user} from "./user/user";

export const NameSpace = {
  GENRE_CHANGE: `GENRE_CHANGE`,
  TEST: `TEST`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.GENRE_CHANGE]: genreChange,
  [NameSpace.TEST]: test,
  [NameSpace.USER]: user,
});
