import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddressInfo } from "../../store/modules/weather/action";
import {
  SearchInput,
  WeatherPeriodList,
  WeatherSqueleton,
} from "./components/index";
import {
  WeatherContainer,
  WeatherDescription,
  WeatherIconContainer,
  WeatherTitle,
} from "./Weather.style";
import { ReactComponent as WeatherIcon } from "../../assets/img/cloudyday.svg";
import {
  pageDescription,
  pageTitle,
  placeholder,
  size,
  width,
} from "./Weather.constant";

const Weather = () => {
  const dispatch = useDispatch();
  const { weatherPeriod, weatherLoading } = useSelector((state: any) => ({
    weatherPeriod: state.weather.weatherPeriod
      ? state.weather.weatherPeriod
      : [],
    weatherLoading: state.weather.weatherLoading,
  }));

  return (
    <WeatherContainer justify="center">
      <WeatherTitle>{pageTitle}</WeatherTitle>
      <WeatherDescription>{pageDescription}</WeatherDescription>
      <SearchInput
        size={size}
        width={width}
        placeholder={placeholder}
        action={(value: string) => dispatch(getAddressInfo(value) as any)}
      />
      {weatherLoading && <WeatherSqueleton />}
      {weatherPeriod?.length > 0 && <WeatherPeriodList list={weatherPeriod} />}

      {weatherPeriod?.length === 0 && (
        <WeatherIconContainer>
          <WeatherIcon width="360px" height="360px" />
        </WeatherIconContainer>
      )}
    </WeatherContainer>
  );
};

export default Weather;
