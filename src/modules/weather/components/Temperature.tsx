import { Col } from 'rsuite'
import {
  TemperatureContainer,
  TemperatureListContainer,
  TemperatureText
} from '../Weather.style'

const Temperature = (temperatureList) => {
  const list = temperatureList
    ? Object.keys(temperatureList).map((key) => temperatureList[key])
    : []

  return (
    <TemperatureListContainer
      as={Col}
      colSpan={24}
      md={2}
      screenwidth={window.screen.availWidth}
    >
      {list.map((listItem, index) => (
        <TemperatureContainer key={index}>
          <TemperatureText>{listItem.temperature}</TemperatureText>
          <b>°F</b>
        </TemperatureContainer>
      ))}
    </TemperatureListContainer>
  )
}

export default Temperature
