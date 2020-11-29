import React from "react";
import renderer from "react-test-renderer";
import {TEST_MOCKS} from "../../test-mock.js";
import GenreList from "./genre-list";
import {MemoryRouter} from "react-router-dom";

describe(`Footer`, () => {
  it(`Should Footer render correctly`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <GenreList
            genreActive = {TEST_MOCKS.genreFilter}
            genreChangeAction = {TEST_MOCKS.noop}
            genereList= {TEST_MOCKS.genresFilter}
          />
        </MemoryRouter>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
