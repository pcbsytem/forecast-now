import React from 'react'
import { Col, FlexboxGrid, List } from 'rsuite'
import {
  WeatherPeriodListImageContainer,
  WeatherPeriodListImage,
  WeatherPeriodListDate,
  WeatherPeriodListItem
} from '../Weather.style'
import { WeatherPeriodListProps } from '../Weather.type'
import Temperature from './Temperature'
import WeatherPeriodDescription from './WeatherPeriodDescription'

const WeatherPeriodList = ({ list }: WeatherPeriodListProps) => {
  const imageAlt = 'weather description'

  return (
    <List hover style={{ width: '100%' }}>
      {list.map((listItem, index) => (
        <List.Item key={index}>
          <FlexboxGrid justify="start">
            <Temperature {...listItem} />
            <WeatherPeriodListItem
              as={Col}
              colSpan={24}
              md={20}
              screenwidth={window.screen.availWidth}
            >
              <WeatherPeriodDescription {...listItem} />
              <WeatherPeriodListDate>
                {new Date(listItem[0].startTime).toLocaleDateString()}
              </WeatherPeriodListDate>
            </WeatherPeriodListItem>
            <WeatherPeriodListImageContainer
              as={Col}
              colSpan={24}
              md={2}
              screenwidth={window.screen.availWidth}
            >
              <WeatherPeriodListImage src={listItem[0].icon} alt={imageAlt} />
            </WeatherPeriodListImageContainer>
          </FlexboxGrid>
        </List.Item>
      ))}
    </List>
  )
}

export default WeatherPeriodList
