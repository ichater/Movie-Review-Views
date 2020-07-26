import UserMovieList from "./UserMovieList";
import React from "react";

import { render } from "@testing-library/react";

test("No Bio Avalible is visible when user.description isnt in the object", async () => {
  const { getByTestId } = render(<UserMovieList />);

  expect(getByTestId("No-List-Visible")).toBeVisible();
});
