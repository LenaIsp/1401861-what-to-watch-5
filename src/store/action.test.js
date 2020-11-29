import {
  ActionType,
  changeGenre,
  changeCountFilms,
  loadMovie,
  loadSingleMovie,
  loadMovieComments,
  loadPromo,
  requireAuthorization,
  loadUser,
  loadFavorites,
  redirectToRoute,
  setDataIsSending,
  setDataSendError,
} from "./action";

import {TEST_MOCKS, TEST_MOCK_USER, TEST_MOCK_MOVIE} from "../test-mock";

describe(`Action creators work correctly`, () => {

  it(`Action creator changeGenre`, () => {
    expect(changeGenre(`Adventure`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Adventure`,
    });
  });

  it(`Action creator changeCountFilms`, () => {
    expect(changeCountFilms(8)).toEqual({
      type: ActionType.SHOW_MORE,
      payload: 8,
    });
  });

  it(`Action creator loadMovie`, () => {
    expect(loadMovie()).toEqual({
      type: ActionType.LOAD_MOVIE,
      payload: TEST_MOCKS.films,
    });
  });

  it(`Action creator loadSingleMovie`, () => {
    expect(loadSingleMovie()).toEqual({
      type: ActionType.LOAD_SINGLE_MOVIE,
      payload: TEST_MOCKS.film,
    });
  });

  it(`Action creator loadMovieComments`, () => {
    expect(loadMovieComments(TEST_MOCKS.reviews)).toEqual({
      type: ActionType.LOAD_MOVIE_COMMENTS,
      payload: TEST_MOCKS.reviews,
    });
  });

  it(`Action creator loadPromo`, () => {
    expect(loadPromo()).toEqual({
      type: ActionType.LOAD_PROMO,
      payload: TEST_MOCKS.film,
    });
  });

  it(`Action creator loadPromo`, () => {
    expect(loadPromo()).toEqual({
      type: ActionType.LOAD_PROMO,
      payload: TEST_MOCKS.film,
    });
  });

  it(`Action creator requireAuthorization`, () => {
    expect(requireAuthorization(status)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    });
  });

  it(`Action creator loadUser`, () => {
    expect(loadUser(TEST_MOCK_USER)).toEqual({
      type: ActionType.LOAD_USER,
      payload: TEST_MOCK_USER,
    });
  });

  it(`Action creator loadFavorites`, () => {
    expect(loadFavorites(TEST_MOCKS.films)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: TEST_MOCKS.films,
    });
  });

  it(`Action creator redirectToRoute`, () => {
    expect(redirectToRoute(TEST_MOCK_MOVIE.poster)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: TEST_MOCK_MOVIE.poster,
    });
  });

  it(`Action creator setDataIsSending`, () => {
    expect(setDataIsSending(true)).toEqual({
      type: ActionType.SET_DATA_IS_SENDING,
      payload: true,
    });
  });

  it(`Action creator setDataIsSending`, () => {
    expect(setDataSendError(false)).toEqual({
      type: ActionType.SET_DATA_SEND_EROR,
      payload: false,
    });
  });
});
