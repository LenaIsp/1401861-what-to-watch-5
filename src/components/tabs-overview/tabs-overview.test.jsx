import React from 'react';
import renderer from 'react-test-renderer';
import {TEST_MOCK_MOVIE} from "../../__test-mock.js";
import TabsOverview from './tabs-overview';


it(`TabsOverview is rendered correctly`, () => {
  const tree = renderer.create(
      <TabsOverview
        director = {TEST_MOCK_MOVIE.director}
        scoresCount = {TEST_MOCK_MOVIE.scoresCount}
        description = {TEST_MOCK_MOVIE.description}
        starring = {TEST_MOCK_MOVIE.starring}
        rating = {TEST_MOCK_MOVIE.rating}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
