import React from "react";
import { shallow } from "enzyme";
import MoviePosterInformation from "./MoviePosterInformation";
import { findByTestAttr } from "../../TestSupport/TestFunctions";

//add event handler for showing movie information!
describe("testing movie poster background", () => {
  const setup = (props = {}) => {
    const component = shallow(<MoviePosterInformation {...props} />);
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
    it("Should display correct moviue information", () => {
      const component = findByTestAttr(
        wrapper,
        "once-upon-a-time-in-america-1530579166.jpg"
      );
      console.log(component);
      expect(component.text()).toBe("View Movie Details");
    });
  });
});
