import UserPage from "./UserPage";
import React from "react";

import { render } from "@testing-library/react";

test("No Bio Avalible is visible when user.description isnt in the object", async () => {
  const testUser = {
    email: "Bats@borkuf.com.au",
    username: "Bruce Wayne",
    _id: "5efafadcc85175246cbf87b8",
  };

  const fakeFunction = (id) => Promise.resolve(testUser);

  const { getByText } = render(<UserPage getUser={fakeFunction} />);

  await fakeFunction("anything");

  expect(getByText("No Bio avalible")).toBeVisible();
});

test("Description visible", async () => {
  const testUser = {
    email: "Bats@borkuf.com.au",
    username: "Bruce Wayne",
    _id: "5efafadcc85175246cbf87b8",
    description: "this test will pass",
  };

  const fakeFunction = (id) => Promise.resolve(testUser);

  const { getByTestId } = render(<UserPage getUser={fakeFunction} />);

  await fakeFunction("anything");

  expect(getByTestId("user-description")).toBeVisible();
});

test("loading visible in absence of data", async () => {
  const testUser = {};
  const fakeFunction = (id) => Promise.resolve(testUser);
  const { getByText } = render(<UserPage getUser={fakeFunction} />);
  await fakeFunction("anything");
  expect(getByText("loading")).toBeVisible();
});

// test("User not found visible in absence of data", async () => {
//   const testUser = {};
//   const fakeFunction = (id) => Promise.resolve(testUser);
//   const { getByText } = render(<UserPage getUser={fakeFunction} />);
//   await fakeFunction("anything");
//   expect(getByText("loading")).toBeVisible();
// });
