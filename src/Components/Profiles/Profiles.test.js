import React from "react";
import { shallow } from "enzyme";
import Profiles from "./Profiles";
import { findByTestAttr } from "../../TestSupport/TestFunctions";

const setup = (props = {}) => {
  const component = shallow(<Profiles {...props} />);
  return component;
};

describe("Renders appropriately with 0 props", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("Should render no display title", () => {
    const wrapper = findByTestAttr(component, "No-Profiles-Header");
    console.log(wrapper.debug());
    expect(wrapper.length).toBe(1);
  });
});
