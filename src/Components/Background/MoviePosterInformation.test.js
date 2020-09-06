import React from "react";
import { mount } from "enzyme";
import MoviePosterInformation from "./MoviePosterInformation";
import { findByTestAttr } from "../../TestSupport/TestFunctions";
import { act } from "react-test-renderer";

const backgroundMovie = {
  title: "Once upon a time in America",
  poster: "once-upon-a-time-in-america-1530579166.jpg",
  year: 1984,
};

describe("MoviePosterInformation", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MoviePosterInformation backgroundMovie={backgroundMovie} />
    );
  });

  it("text changes on click", () => {
    const button = findByTestAttr(wrapper, backgroundMovie.poster);

    expect(button.text()).toBe("View Movie Details");
    expect(wrapper.find("Transition").props().in).toBe(false);

    button.simulate("click");

    expect(button.text()).toBe("Hide Movie Details");
    expect(wrapper.find("Transition").props().in).toBe(true);
    expect(wrapper.find("Transition").find("span").text()).toEqual(
      `${backgroundMovie.title} (${backgroundMovie.year})`
    );
  });
});
