import React from "react";
import renderer from "react-test-renderer";
import PlayerPage from "./player-page";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../__test-mock.js";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`PlayerPage`, () => {
  it(`Should PlayerPage render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PlayerPage
                films={TEST_MOCKS.movies}
                onReplayButtonClick = {TEST_MOCKS.noop}
                routes = {TEST_MOCKS.routes}
              />
            </MemoryRouter>
          </Provider>
          , {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
