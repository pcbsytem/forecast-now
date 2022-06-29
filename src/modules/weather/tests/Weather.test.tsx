import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import * as reactRedux from "react-redux";
import Weather from "../Weather";
import { SearchInput } from "../components";
import { placeholder, size, width } from "../Weather.constant";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const mockWeatherPeriod = [
  [
    {
      number: 12,
      name: "Monday Night",
      startTime: "2022-07-04T18:00:00-04:00",
      endTime: "2022-07-05T06:00:00-04:00",
      isDaytime: false,
      temperature: 71,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "5 mph",
      windDirection: "S",
      icon: "https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium",
      shortForecast: "Chance Showers And Thunderstorms",
      detailedForecast:
        "A chance of showers and thunderstorms. Partly cloudy, with a low around 71. Chance of precipitation is 30%.",
    },
    {
      number: 11,
      name: "Independence Day",
      startTime: "2022-07-04T06:00:00-04:00",
      endTime: "2022-07-04T18:00:00-04:00",
      isDaytime: true,
      temperature: 88,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "5 mph",
      windDirection: "W",
      icon: "https://api.weather.gov/icons/land/day/sct/tsra_hi,30?size=medium",
      shortForecast: "Mostly Sunny then Chance Showers And Thunderstorms",
      detailedForecast:
        "A chance of showers and thunderstorms after 2pm. Mostly sunny, with a high near 88. Chance of precipitation is 30%.",
    },
  ],
  [
    {
      number: 14,
      name: "Tuesday Night",
      startTime: "2022-07-05T18:00:00-04:00",
      endTime: "2022-07-06T06:00:00-04:00",
      isDaytime: false,
      temperature: 70,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "7 mph",
      windDirection: "SW",
      icon: "https://api.weather.gov/icons/land/night/tsra_sct,40/tsra_sct,30?size=medium",
      shortForecast: "Chance Showers And Thunderstorms",
      detailedForecast:
        "A chance of showers and thunderstorms. Mostly cloudy, with a low around 70. Chance of precipitation is 40%.",
    },
    {
      number: 13,
      name: "Tuesday",
      startTime: "2022-07-05T06:00:00-04:00",
      endTime: "2022-07-05T18:00:00-04:00",
      isDaytime: true,
      temperature: 88,
      temperatureUnit: "F",
      temperatureTrend: null,
      windSpeed: "2 to 7 mph",
      windDirection: "S",
      icon: "https://api.weather.gov/icons/land/day/rain_showers,30/tsra_hi,40?size=medium",
      shortForecast:
        "Chance Rain Showers then Chance Showers And Thunderstorms",
      detailedForecast:
        "A chance of rain showers before 8am, then a chance of showers and thunderstorms. Partly sunny, with a high near 88. Chance of precipitation is 40%.",
    },
  ],
];

describe("Weather page", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const address =
    "1600 Pennsylvania Avenue NW, Washington, DC 20500, United States";

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  const setup = () => {
    const utils = render(
      <SearchInput
        size={size}
        width={width}
        placeholder={placeholder}
        action={() => jest.fn()}
      />,
    );

    const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  it("Should render correctly", () => {
    useSelectorMock.mockReturnValue({
      weather: {
        weatherPeriod: mockWeatherPeriod,
        weatherLoading: false,
      },
    });

    expect(render(<Weather />)).toMatchSnapshot();
  });

  it("Should search an address", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: address } });
    expect(input?.value).toBe(address);
  });
});
