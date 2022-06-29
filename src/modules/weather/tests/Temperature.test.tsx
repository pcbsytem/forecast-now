import React from "react";
import { render } from "@testing-library/react";
import Temperature from "../components/Temperature";

const mockWeatherPeriod = {
  "0": {
    number: 14,
    name: "Tuesday Night",
    startTime: "2022-07-05T18:00:00-04:00",
    endTime: "2022-07-06T06:00:00-04:00",
    isDaytime: false,
    temperature: 72,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "6 mph",
    windDirection: "W",
    icon: "https://api.weather.gov/icons/land/night/tsra_sct,40/tsra_sct,30?size=medium",
    shortForecast: "Chance Showers And Thunderstorms",
    detailedForecast:
      "A chance of showers and thunderstorms. Mostly cloudy, with a low around 72. Chance of precipitation is 40%.",
  },
  "1": {
    number: 13,
    name: "Tuesday",
    startTime: "2022-07-05T06:00:00-04:00",
    endTime: "2022-07-05T18:00:00-04:00",
    isDaytime: true,
    temperature: 91,
    temperatureUnit: "F",
    temperatureTrend: null,
    windSpeed: "2 to 7 mph",
    windDirection: "S",
    icon: "https://api.weather.gov/icons/land/day/rain_showers,40/tsra_hi,40?size=medium",
    shortForecast: "Chance Rain Showers then Chance Showers And Thunderstorms",
    detailedForecast:
      "A chance of rain showers before 8am, then a chance of showers and thunderstorms. Partly sunny, with a high near 91. Chance of precipitation is 40%.",
  },
};

describe("Temperature component", () => {
  it("Should render correctly", () => {
    expect(render(<Temperature {...mockWeatherPeriod} />)).toMatchSnapshot();
  });

  it("Should render Temperature with empty list", () => {
    expect(render(<Temperature {...mockWeatherPeriod} />)).toMatchSnapshot();
  });
});
