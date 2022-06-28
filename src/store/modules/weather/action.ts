import axios from 'axios'
import { addressApi, weatherApi } from '../../../services/api'

export const addAddressInfo = (address: any) => {
    return {
        type: 'ADD_ADDRESS_INFO',
        address
    }
}

export const addWeatherInfo = (weather: any) => {
    return {
        type: 'GET_WEATHER_INFO',
        weather
    }
}

export const getAddressInfo = () => {
    const params = {
        query: '1600 Pennsylvania Avenue NW, Washington, DC 20500, United States',
        'access_key': process.env.REACT_APP_ADDRESS_KEY
    }
    const url = '/v1/forward'

    return (dispatch: any) => {
        addressApi.get(url, {
            params,
        }).then((response) => {
            dispatch(addAddressInfo(response.data))
        }).catch((error) => console.log(error));
    }
}

export const getWeatherInfo = () => {
    const latitude = 38.8988
    const longitude = -77.0353
    const url = `/points/${latitude},${longitude}`

    return (dispatch: any) => {
        weatherApi.get(url).then((response) => {
            console.log(response?.data?.properties?.forecast)
            // dispatch(getWeatherPeriodInfo(response?.data?.properties?.forecast))
        }).catch((error) => console.log(error));
    }
}

export const getWeatherPeriodInfo = ({ periodUrl }: { periodUrl: string }) => {
    return (dispatch: any) => {
        axios.get(periodUrl).then((response) => {
            console.log(response)
        }).catch((error) => console.log(error));
    }
}