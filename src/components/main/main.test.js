import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {TEST_MOCK_STORE, TEST_MOCKS, TEST_MOCK_COMMENT} from "../../test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`Main`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Main
              films={TEST_MOCKS.movies}
              onFormSubmit ={TEST_MOCKS.noop}
              onReviewChange ={TEST_MOCKS.noop}
              onRatingChange ={TEST_MOCKS.noop}
              isDataSending ={false}
              isDataSendError ={false}
              rating={TEST_MOCK_COMMENT.rating}
              reviewText={TEST_MOCK_COMMENT.reviewText}
              rout={`1`}
              filmsId={TEST_MOCKS.movie}
              id={`1`}
              isValid={false}
              login={true}
              avatar={true}
            />
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
