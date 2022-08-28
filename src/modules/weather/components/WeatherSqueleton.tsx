import React from 'react'
import { Col, FlexboxGrid, List } from 'rsuite'
import Skeleton from 'react-loading-skeleton'
import {
  WeatherPeriodListTitle,
  WeatherPeriodListImageContainer,
  WeatherPeriodListDate,
  WeatherPeriodListItem
} from '../Weather.style'

const WeatherSqueleton = () => {
  const list = [1, 2, 3, 4, 5, 6, 7]

  return (
    <List hover style={{ width: '100%' }}>
      {list.map((listItem) => (
        <List.Item key={listItem}>
          <FlexboxGrid justify="start">
            <FlexboxGrid.Item
              as={Col}
              colSpan={24}
              md={2}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Skeleton style={{ marginBottom: 16 }} width={30} height={30} />
              <Skeleton style={{ width: 30, height: 30 }} />
            </FlexboxGrid.Item>

            <WeatherPeriodListItem as={Col} colSpan={24} md={20}>
              <WeatherPeriodListTitle>
                <Skeleton style={{ width: 280, maxWidth: 2000, height: 24 }} />
              </WeatherPeriodListTitle>
              <WeatherPeriodListDate>
                <Skeleton style={{ width: 60, height: 24 }} />
              </WeatherPeriodListDate>
            </WeatherPeriodListItem>
            <WeatherPeriodListImageContainer
              as={Col}
              colSpan={24}
              md={2}
              screenwidth={window.screen.availWidth}
            >
              <Skeleton
                style={{
                  width:
                    window.screen.availWidth > 768
                      ? 60
                      : window.screen.availWidth * 0.7,
                  height:
                    window.screen.availWidth > 768
                      ? 60
                      : window.screen.availHeight * 0.6
                }}
              />
            </WeatherPeriodListImageContainer>
          </FlexboxGrid>
        </List.Item>
      ))}
    </List>
  )
}

export default WeatherSqueleton
