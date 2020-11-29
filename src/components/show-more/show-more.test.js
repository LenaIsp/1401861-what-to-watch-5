import React from 'react';
import renderer from 'react-test-renderer';

import ShowMore from './show-more';
import {TEST_MOCKS} from "../../__test-mock.js";


it(`ShowMore is rendered correctly`, () => {
  const tree = renderer.create(
      <ShowMore
        films={TEST_MOCKS.movies}
        changeCountFilmsAction = {TEST_MOCKS.noop}
        maxFilms = {8}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
