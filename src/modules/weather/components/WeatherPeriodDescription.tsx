import React from "react";
import { WeatherPeriodListTitle } from "../Weather.style";

const WeatherPeriodDescription = (weatherList) => {
  const list = weatherList
    ? Object.keys(weatherList)
        .map((key) => weatherList[key])
        .reverse()
    : [];

  return (
    <>
      {list.map((listItem, index) => (
        <div key={index}>
          <b>{listItem.name}</b>
          <WeatherPeriodListTitle>
            {listItem.detailedForecast}
          </WeatherPeriodListTitle>
        </div>
      ))}
    </>
  );
};

export default WeatherPeriodDescription;
