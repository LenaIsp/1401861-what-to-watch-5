import React from "react";
import renderer from "react-test-renderer";
import Error from "./error";
import {MemoryRouter} from "react-router-dom";

describe(`Error`, () => {
  it(`Should Error render correctly`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <Error/>
        </MemoryRouter>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
