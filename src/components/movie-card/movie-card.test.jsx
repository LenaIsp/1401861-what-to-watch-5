import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../test-mock.js";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MovieCard`, () => {
  it(`Should MovieCard render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <MovieCard
                films={TEST_MOCKS.movie} />
            </MemoryRouter>
          </Provider>
      )
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
