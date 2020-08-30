// import React from "react";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import { render, fireEvent, cleanup } from "@testing-library/react";
// import { setAlert } from "./alert";
// import "jest-dom/extend-expect";
// import Alert from "../Components/layout/Alert";

// afterEach(cleanup);

// function reducer(state, action) {
//   switch (action.type) {
//     case "SET_ALERT":
//       return [...state, <Alert />];
//     case "REMOVE_ALERT":
//       return state;
//     default:
//       return state;
//   }
// }

// function renderWithRedux(
//   component,
//   { initialState, store = createStore(reducer, initialState) } = {}
// ) {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//   };
// }

// it("returns the correct Alert after a call", () => {
//   const { getByTestId } = renderWithRedux(<Alert />);
//   expect(getByTestId("main-alert")).toBeVisible();
// });
