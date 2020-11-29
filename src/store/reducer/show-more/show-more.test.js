import {onMaxFilms} from "./show-more";
import {ActionType} from '../../action';

const COUNT_FILMS = 8;

const initialState = {
  maxFilms: COUNT_FILMS,
};

describe(`ReducerShowMore`, () => {
  it(`Increment correctly`, () => {
    expect(onMaxFilms(initialState, {
      type: ActionType.SHOW_MORE,
    })).toEqual({
      maxFilms: initialState.maxFilms + COUNT_FILMS,
    });
  });
});
