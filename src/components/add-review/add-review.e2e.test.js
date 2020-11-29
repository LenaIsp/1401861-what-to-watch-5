import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {TEST_MOCKS, TEST_MOCK_COMMENT} from "../../__test-mock.js";
import {AddRewiev} from "./add-review";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should test add user review`, () => {
  const handleSubmit = jest.fn();

  const wrapper = shallow(
      <AddRewiev
        onFormSubmit ={handleSubmit}
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
      />
  );
  const formReview = wrapper.find(`form.add-review__form`);

  formReview.simulate(`submit`, {preventDefault() {}});
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
