
import React from 'react';
import renderer from 'react-test-renderer';
import Player from './player';
import {TEST_MOCKS} from "../../test-mock.js";

it(`Player is rendered correctly`, () => {

  const tree = renderer.create(
      <Player
        films={TEST_MOCKS.movies}
        onReplayButtonClick = {TEST_MOCKS.noop}
        routes = {TEST_MOCKS.routes}
        handleClickPlay = {TEST_MOCKS.noop}
        handleClickPause = {TEST_MOCKS.noop}
        handleClickFullScreen = {TEST_MOCKS.noop}
        player = {`play`}
        duration = {50}
        currentTime = {50}
      >
        <video />
      </Player>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
