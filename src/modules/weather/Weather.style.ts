import { FlexboxGrid, InputGroup } from 'rsuite'
import styled from 'styled-components'

// Temperature
export const TemperatureListContainer = styled(FlexboxGrid.Item)`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    width: ${({ screenWidth }) => screenWidth < 768 ? '100%' : ''};
`

export const TemperatureContainer = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
`

export const TemperatureText = styled.b`
    font-size: 2rem;
`

// Weather
export const WeatherContainer = styled(FlexboxGrid)`
    padding: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    flex-direction: column;
`

export const WeatherTitle = styled.h1`
    font-size: 2rem;
    padding-bottom: 0;
    line-height: 32px;
`

export const WeatherDescription = styled.p`
    font-size: 1rem;
    padding: 0.2rem 0 0.5rem;
`

export const WeatherIconContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

// WeatherPeriodList styles
export const WeatherPeriodListItem = styled(FlexboxGrid.Item)`
    padding: ${({ screenWidth }) => screenWidth < 768 ? '1rem' : '1rem 1rem 1rem 0'};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    flex-direction: column;
`

export const WeatherPeriodListDate = styled.div`
    font-size: 0.8rem;
    color: #97969B;
    padding: 0.3125rem 0;
`

export const WeatherPeriodListTitle = styled.div`
    text-align: justify;
`

export const WeatherPeriodListImageContainer = styled(FlexboxGrid.Item)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    width: ${({ screenWidth }) => screenWidth < 768 ? '100%' : ''};
`

export const WeatherPeriodListImage = styled.img`
    border-radius: 0.25rem;
    width: 100%;
`

// SearchInput
export const SearchInputContainer = styled(FlexboxGrid)`
    width: 100%;
    padding-bottom: 1rem;
`

export const SearchInputGroup = styled(InputGroup)`
    width: ${({ width }) => width};
    max-width: 1280px;
`
