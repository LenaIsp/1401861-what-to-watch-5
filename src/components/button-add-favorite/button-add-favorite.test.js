import React from "react";
import renderer from "react-test-renderer";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import ButtonAddFavorite from "./button-add-favorite";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`App`, () => {
  it(`Should App render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <ButtonAddFavorite
              id={1}
              isFavorite={false}
              isPromo={`false`}
              onFavoriteClick={TEST_MOCKS.noop}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
