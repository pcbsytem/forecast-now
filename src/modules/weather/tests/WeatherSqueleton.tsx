import React from "react";
import { render } from "@testing-library/react";
import WeatherSqueleton from "../components/WeatherSqueleton";

describe("WeatherSqueleton component", () => {
  it("Should render correctly", () => {
    expect(render(<WeatherSqueleton />)).toMatchSnapshot();
  });
});
