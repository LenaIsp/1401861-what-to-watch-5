import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../__test-mock.js";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MovieList`, () => {
  it(`Should MovieList render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <MovieList
                films = {TEST_MOCKS.movies}
                maxFilms = {8}
                id = {`5`}
              />
            </MemoryRouter>
          </Provider>
      )
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
