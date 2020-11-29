import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {TEST_MOCK_STORE} from "../../__test-mock.js";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`Header`, () => {
  it(`Should Header render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Header
                login={false}
                avatar={true}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
