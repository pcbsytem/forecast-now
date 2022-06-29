import React from "react";
import { render } from "@testing-library/react";
import { SearchInput } from "../components";
import { placeholder, size, width } from "../Weather.constant";

describe("SearchInput component", () => {
  it("Should render correctly", () => {
    expect(
      render(
        <SearchInput
          size={size}
          width={width}
          placeholder={placeholder}
          action={() => jest.fn()}
        />,
      ),
    ).toMatchSnapshot();
  });
});
