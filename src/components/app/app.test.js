import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`App`, () => {
  it(`Should App render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <App
              routes={TEST_MOCKS.routes}
              promo={TEST_MOCKS.movie}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
