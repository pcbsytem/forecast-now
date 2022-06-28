import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAddressInfo,
  getWeatherInfo,
} from "../../store/modules/weather/action";
import SearchInput from "./components/SeachInput";

const Weather = () => {
  const dispatch = useDispatch();
  const size = "lg";
  const width = "771px";
  const placeholder = "Search...";

  useEffect(() => {
    dispatch(getAddressInfo() as any);
    dispatch(getWeatherInfo() as any);
  }, []);

  return (
    <div>
      <h1>Weather</h1>
      <SearchInput
        size={size}
        width={width}
        placeholder={placeholder}
        action={(value: string) => console.log(value)}
      />
    </div>
  );
};

export default Weather;
