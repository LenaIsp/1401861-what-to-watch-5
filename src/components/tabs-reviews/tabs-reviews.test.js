import React from 'react';
import renderer from 'react-test-renderer';
import {TEST_MOCKS} from "../../__test-mock.js";
import TabsReviews from './tabs-reviews';

it(`TabsReviews is rendered correctly`, () => {
  const tree = renderer.create(
      <TabsReviews
        reviews={TEST_MOCKS.reviews}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
