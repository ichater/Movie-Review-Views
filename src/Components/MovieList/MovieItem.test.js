import React from "react";
import { shallow } from "enzyme";
import MovieItem from "./MovieItem";
import { findByTestAttr } from "../../TestSupport/TestFunctions";

const setup = (props = {}) => {
  const component = shallow(<MovieItem {...props} />);
  return component;
};

describe("Movie Search page", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "movie-table-row");
    expect(wrapper.length).toBe(1);
  });
  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "movie-title-poster");
    expect(wrapper.length).toBe(1);
  });
});

describe("Movie table render both with and without props", () => {
  describe("has props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        id: "tt0093177",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTkyNzc4NjkwNV5BMl5BanBnXkFtZTgwNzI2Mjc1MDE@._V1_SX300.jpg",
        title: "Hellraiser",
        type: "movie",
        year: 1987,
      };
      wrapper = setup(props);
    });
    it("renders without errors", () => {
      const component = findByTestAttr(wrapper, "movie-title");
      expect(component.length).toBe(1);
    });
    it("should render a year", () => {
      const component = findByTestAttr(wrapper, "movie-year");
      console.log(component.text());
      expect(component.text()).toBe("1987");
    });
  });

  describe("has no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    it("should not render a year", () => {
      const component = findByTestAttr(wrapper, "movie-year");
      expect(component.text()).toBe("No year avalible");
    });
  });
});
