import React from 'react';
import renderer from 'react-test-renderer';
import {TEST_MOCKS, TEST_MOCK_COMMENT, TEST_MOCK_MOVIE} from "../../test-mock.js";
import Tabs from './tabs';

it(`ShowMore is rendered correctly`, () => {
  const tree = renderer.create(
      <Tabs
        rating={TEST_MOCK_COMMENT.rating}
        director={TEST_MOCK_MOVIE.director}
        scoresCount={TEST_MOCK_MOVIE.scoresCount}
        description={TEST_MOCK_MOVIE.description}
        starring={TEST_MOCK_MOVIE.starring}
        released= {TEST_MOCK_MOVIE.released}
        runTime={TEST_MOCK_MOVIE.runTime}
        handleClick={TEST_MOCKS.noop}
        reviews={TEST_MOCKS.reviews}
        genre={TEST_MOCKS.genreFilter}
        state={TEST_MOCKS.state}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
