import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { setAlert } from "./alert";
import Alert from "../Components/layout/Alert";

it("returns the correct Alert after a call", () => {
  const { getByTestId } = render(<Alert />);
  expect(getByTestId("main-alert")).toBeVisible();
});
