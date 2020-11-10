import {combineReducers} from "redux";
import {genreChange} from "./genre-change/genre-change";
import {test} from "./test/test";

export const NameSpace = {
  GENRE_CHANGE: `GENRE_CHANGE`,
  TEST: `TEST`,
};

export default combineReducers({
  [NameSpace.GENRE_CHANGE]: genreChange,
  [NameSpace.TEST]: test,
});
