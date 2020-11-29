import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../__test-mock.js";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MoviePage`, () => {
  it(`Should MoviePage render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <MoviePage
                films={TEST_MOCKS.movies}
                activeFilm = {TEST_MOCKS.movie}
                reviews={TEST_MOCKS.reviews}
                onPageLoad = {TEST_MOCKS.noop}
                routes = {`1`}
              />
            </MemoryRouter>
          </Provider>
      )
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
