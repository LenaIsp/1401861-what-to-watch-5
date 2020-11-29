import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withPlayer from "./with-player";
import {TEST_MOCKS} from "../../__test-mock.js";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withPlayer(MockComponent);

it(`WithPlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      films = {TEST_MOCKS.movies}
      routes = {TEST_MOCKS.routes}
    >
      <React.Fragment />
    </MockComponentWrapped>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
