import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withTab from "./with-tab";
import {TabsList} from "../../const";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withTab(MockComponent);

describe(`interactions with with-tab`, () => {
  it(`Should change tab`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    expect(wrapper.state().activeTab).toEqual(TabsList.OVERVIEW);

    wrapper.props().onActiveMovieChange(TabsList.DETAILS);
    expect(wrapper.state().activeTab).toEqual(TabsList.DETAILS);

    wrapper.props().onActiveMovieChange(TabsList.REVIEWS);
    expect(wrapper.state().activeTab).toEqual(TabsList.REVIEWS);

    wrapper.props().onActiveMovieChange(TabsList.OVERVIEW);
    expect(wrapper.state().activeTab).toEqual(TabsList.OVERVIEW);
  });
});
