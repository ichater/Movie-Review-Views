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

// describe("experimenting with non shallow", () => {
//   it("Should render without errors", () => {
//     const searchedMovieProps = {
//       id: "tt0093177",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BMTkyNzc4NjkwNV5BMl5BanBnXkFtZTgwNzI2Mjc1MDE@._V1_SX300.jpg",
//       title: "Hellraiser",
//       type: "movie",
//       year: 1987,
//     };

//     const component = shallow(<MovieItem {...searchedMovieProps} />);
//     console.log(component.debug());
//     const wrapper = component.find(`[data-test='movie-title']`);
//     expect(wrapper.text()).to.equal("Hellraiser");
//   });
// });
