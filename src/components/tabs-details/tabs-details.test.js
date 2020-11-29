import React from 'react';
import renderer from 'react-test-renderer';
import {TEST_MOCKS, TEST_MOCK_MOVIE} from "../../__test-mock.js";
import TabsDetails from './tabs-details';


it(`TabsDetails is rendered correctly`, () => {
  const tree = renderer.create(
      <TabsDetails
        director={TEST_MOCK_MOVIE.director}
        released= {TEST_MOCK_MOVIE.released}
        starring={TEST_MOCK_MOVIE.starring}
        genre={TEST_MOCKS.genreFilter}
        runTime={TEST_MOCK_MOVIE.runTime}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
