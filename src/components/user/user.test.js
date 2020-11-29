import React from "react";
import renderer from "react-test-renderer";
import User from "./user";
import {TEST_MOCK_STORE, TEST_MOCK_USER} from "../../test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`User`, () => {
  it(`Should App render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <User
              userStatus={TEST_MOCK_USER.userStatus}
              avatarUrl={TEST_MOCK_USER.avatarUrl}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
