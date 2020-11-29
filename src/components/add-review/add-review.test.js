import React from "react";
import renderer from "react-test-renderer";
import AddRewiev from "./add-review";
import {TEST_MOCK_STORE, TEST_MOCKS, TEST_MOCK_COMMENT, TEST_MOCK_USER} from "../../__test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`AddRewiev`, () => {
  it(`Should AddRewiev render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <AddRewiev
              onFormSubmit ={TEST_MOCKS.noop}
              onReviewChange ={TEST_MOCKS.noop}
              onRatingChange ={TEST_MOCKS.noop}
              isDataSending ={false}
              isDataSendError ={false}
              rating={TEST_MOCK_COMMENT.rating}
              reviewText={TEST_MOCK_COMMENT.reviewText}
              rout={`1`}
              films={TEST_MOCKS.movies}
              filmsId={TEST_MOCKS.movie}
              id={`1`}
              isValid={false}
              avatar={TEST_MOCK_USER.avatarUrl}
            />
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
