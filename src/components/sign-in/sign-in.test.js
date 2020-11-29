import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";
import {TEST_MOCK_STORE, TEST_MOCKS, TEST_MOCK_USER} from "../../test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`SignIn`, () => {
  it(`Should SignIn render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <SignIn
              handleChange ={TEST_MOCKS.noop}
              onSubmit ={TEST_MOCKS.noop}
              email={TEST_MOCK_USER.email}
              password={TEST_MOCK_USER.password}
            />
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
