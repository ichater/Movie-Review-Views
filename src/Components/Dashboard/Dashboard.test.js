import React from "react";
import { shallow } from "enzyme";
import { Dashboard } from "./Dashboard";
import { findByTestAttr } from "../../TestSupport/TestFunctions";
import { act } from "react-test-renderer";

const testProfile = {
  _id: "5f499bb1edb4089999ad04d4",
  user: {
    _id: "5f48bd9f09b6683668dc58b7",
    username: "Melanie",
  },
  __v: 2,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  likesAboutMovies:
    "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  location: "Albert park",
  avatar:
    "https://shepherdexpress.com/downloads/26874/download/film_sicario_1.jpg.jpe?cb=64c3ca535d9f20df798a66bad0a14a99&w=640",
  filmQuotes: [
    {
      _id: "5f4a4dba6cb9ca2658b641a8",
      film: "Blade Runner",
      quote: "Like Tears in Rain",
    },
    {
      _id: "5f4a4ddd6cb9ca2658b641a9",
      film: "Once upon a Time in the West",
      quote: "You brought to too many",
    },
  ],
};

const setup = (props = {}) => {
  const component = shallow(<Dashboard {...props} />);
  return component;
};

describe("rendering profile on dashboard consitionally", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      testProfile,
    };
    wrapper = "setup is the problem";
  });
  console.log(wrapper);
  it("what displays if no film quotes are present", () => {
    expect(findByTestAttr(wrapper, "no-film").text()).toBe(
      "No film Quotes to Display"
    );
  });
});
