import React from "react";
import { shallow } from "enzyme";
import MoviePosterBackground from "./MoviePosterBackground";
import { findByTestAttr } from "../../TestSupport/TestFunctions";

describe("testing movie poster background", () => {
  const setup = (props = {}) => {
    const component = shallow(<MoviePosterBackground {...props} />);
    return component;
  };
  const backgroundMovie = {
    title: "Once upon a time in America",
    poster: "once-upon-a-time-in-america-1530579166.jpg",
    year: 1984,
  };
  describe("correct movie poster is rendered", () => {
    let wrapper;
    beforeEach(() => {
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

      expect(wrapper.find("img").props().src).toEqual(backgroundMovie.poster);

      expect(
        wrapper.find("MoviePosterInformation").props().backgroundMovie.title
      ).toEqual(backgroundMovie.title);
    });
  });
});
