import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./my-list";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../__test-mock.js";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MyList`, () => {
  it(`Should MyList render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <MyList
                favorites={TEST_MOCKS.favorites}
                onFavoritesLoad = {TEST_MOCKS.noop}
              />
            </MemoryRouter>
          </Provider>
      )
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
