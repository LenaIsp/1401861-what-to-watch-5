import {combineReducers} from "redux";
import {genreChange} from "./genre-change/genre-change";
import {test} from "./show-more/show-more";
import {user} from "./user/user";

export const NameSpace = {
  GENRE_CHANGE: `GENRE_CHANGE`,
  SHOW_MORE: `SHOW_MORE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.GENRE_CHANGE]: genreChange,
  [NameSpace.SHOW_MORE]: test,
  [NameSpace.USER]: user,
});
