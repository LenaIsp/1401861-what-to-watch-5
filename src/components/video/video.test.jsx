
import React from 'react';
import renderer from 'react-test-renderer';

import Video from './video';
import {TEST_MOCK_MOVIE, TEST_MOCKS} from "../../__test-mock.js";


it(`Video is rendered correctly`, () => {

  const tree = renderer.create(
      <Video
        posterSrc={TEST_MOCK_MOVIE.previewImage}
        videoSrc = {TEST_MOCK_MOVIE.previewVideoLink}
        onMouseEnter = {TEST_MOCKS.noop}
        onMouseLeave = {TEST_MOCKS.noop}
        isActive = {true}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
