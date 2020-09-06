import React from "react";
import { shallow } from "enzyme";
import MoviePosterBackground from "./MoviePosterBackground";
import { findByTestAttr } from "../../TestSupport/TestFunctions";

describe("testing movie poster background", () => {
  const setup = (props = {}) => {
    const component = shallow(<MoviePosterBackground {...props} />);
    return component;
  };
  describe("correct movie poster is rendered", () => {
    let wrapper;
    beforeEach(() => {
      const backgroundMovie = {
        title: "Once upon a time in America",
        poster: "once-upon-a-time-in-america-1530579166.jpg",
        year: 1984,
      };
      const props = {
        backgroundMovie,
      };
      wrapper = setup(props);
    });
    it("Should render without errors", () => {
      const component = findByTestAttr(
        wrapper,
        "once-upon-a-time-in-america-1530579166.jpg"
      );

      expect(component.length).toBe(1);
    });
    it("should return a new poster after 10 seconds", () => {
      const component = findByTestAttr(
        wrapper,
        "once-upon-a-time-in-america-1530579166.jpg"
      );
      setTimeout(() => {
        expect(component.length).toBe(0);
      }, 11000);
    });
  });
});
