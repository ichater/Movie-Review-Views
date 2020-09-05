import React from "react";
import { shallow } from "enzyme";
import MovieTableHeader from "./MovieTableHeader";
import { findByTestAttr } from "../../TestSupport/TestFunctions";

const setup = (props = {}) => {
  const component = shallow(<MovieTableHeader {...props} />);
  return component;
};

describe("Movie Table display with props", () => {
  let component;
  beforeEach(() => {
    const props = { isPopulated: true };
    component = setup(props);
  });

  it("Should render title", () => {
    const wrapper = findByTestAttr(component, "interactive-title");
    console.log(wrapper.debug());
    expect(wrapper.length).toBe(1);
  });
});

describe("Movie Table display without props", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("Should render the no movie response", () => {
    const wrapper = findByTestAttr(component, "no-movie-response");
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe("Select movies please");
  });
});
