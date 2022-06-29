import React from "react";
import { render } from "@testing-library/react";
import WeatherPeriodList from "../components/WeatherPeriodList";

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

describe("WeatherPeriodList component", () => {
  it("Should render correctly", () => {
    expect(
      render(<WeatherPeriodList list={mockWeatherPeriod} />),
    ).toMatchSnapshot();
  });

  it("Should render WeatherPeriodList with empty list", () => {
    expect(render(<WeatherPeriodList list={[]} />)).toMatchSnapshot();
  });
});
