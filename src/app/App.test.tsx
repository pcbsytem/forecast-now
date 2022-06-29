import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("Should render correctly", () => {
    expect(render(<App />)).toMatchSnapshot();
  });
});
