import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {fetchMovieList, fetchSingleMovie, fetchFavorites, fetchMoviePromo, fetchComments} from "../../api-action";
import {TEST_MOCK_COMMENT} from "../../../__test-mock";
import {adapterFilmsToClient, adapterFilm} from "../../../utils";

const api = createAPI(() => {});

export const ACTIVE_FILM_INITIAL_STATE = {
  description: [],
  director: ``,
  genre: ``,
  id: 0,
  title: ``,
  poster: ``,
  preview: ``,
  background: ``,
  backgroundColor: ``,
  rankNumber: 0,
  isFavorite: false,
  rankText: ``,
  year: 0,
  video: ``,
  videoMain: ``,
  duration: 0,
  cast: ``,
  votes: 0,
};

const mockFilmServerStyle = {
  "background_color": ``,
  "background_image": ``,
  "description": `I hate tests.`,
  "director": ``,
  "genre": ``,
  "id": 1,
  "is_favorite": true,
  "name": ``,
  "poster_image": ``,
  "preview_image": ``,
  "preview_video_link": ``,
  "rating": 3.6,
  "released": 2008,
  "run_time": 92,
  "scores_count": 0,
  "starring": [``, ``, ``],
  "video_link": ``,
};

const apiMock = new MockAdapter(api);

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API`, () => {
    const dataMock = [mockFilmServerStyle];
    const dispatch = jest.fn();
    const filmsLoader = fetchMovieList();

    apiMock
      .onGet(`films`)
      .reply(200, dataMock);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE,
          payload: adapterFilm(dataMock),
        });
      });
  });

  it(`Should make a correct API`, () => {
    const id = 1;
    const dataMock = mockFilmServerStyle;
    const dispatch = jest.fn();
    const filmsLoader = fetchSingleMovie(id);

    apiMock
      .onGet(`films/${id}`)
      .reply(200, dataMock);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SINGLE_MOVIE,
          payload: adapterFilmsToClient(dataMock),
        });
      });
  });


  it(`Should make a correct API call to /films/promo`, () => {
    const dataMock = mockFilmServerStyle;
    const dispatch = jest.fn();
    const promoLoader = fetchMoviePromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, dataMock);

    return promoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: adapterFilmsToClient(dataMock),
        });
      });
  });

  it(`Should make a correct API`, () => {
    const id = 1;
    const dataMock = [TEST_MOCK_COMMENT];
    const dispatch = jest.fn();
    const filmLoader = fetchComments(id);

    apiMock
      .onGet(`/comments/${id}`)
      .reply(200, dataMock);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE_COMMENTS,
          payload: dataMock,
        });
      });
  });

  it(`Should make a correct API`, () => {
    const dataMock = [mockFilmServerStyle];
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, dataMock);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: adapterFilm(dataMock),
        });
      });
  });
});
