import { Col, FlexboxGrid } from "rsuite";
import {
  TemperatureContainer,
  TemperatureListContainer,
  TemperatureText,
} from "../Weather.style";

const Temperature = (temperatureList) => {
  const list = temperatureList
    ? Object.keys(temperatureList).map((key) => temperatureList[key])
    : [];

  return (
    <TemperatureListContainer
      as={Col}
      colspan={24}
      md={2}
      screenWidth={window.screen.availWidth}
    >
      {list.map((listItem, index) => (
        <TemperatureContainer key={index}>
          <TemperatureText>{listItem.temperature}</TemperatureText>
          <b>°F</b>
        </TemperatureContainer>
      ))}
    </TemperatureListContainer>
  );
};

export default Temperature;
