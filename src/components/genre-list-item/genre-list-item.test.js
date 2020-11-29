import React from "react";
import renderer from "react-test-renderer";
import {TEST_MOCKS} from "../../__test-mock.js";
import GenreListItem from "./genre-list-item";
import {MemoryRouter} from "react-router-dom";

describe(`GenreListItem`, () => {
  it(`Should Footer render correctly`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <GenreListItem
            className = {`active`}
            name = {TEST_MOCKS.genreFilter}
            genreChangeAction= {TEST_MOCKS.noop}
          />
        </MemoryRouter>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
