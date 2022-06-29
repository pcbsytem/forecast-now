import { handleGroupSameDay } from '../../../modules/weather/utils/Weather'
import { AddWeatherInfoProps, GetWeatherInfoProps } from '../../../modules/weather/Weather.type'
import { addressApi, generalApi, weatherApi } from '../../../services/api'

export const addWeatherInfo = (weatherPeriod: AddWeatherInfoProps[]) => ({
    type: 'GET_WEATHER_PERIOD',
    weatherPeriod
})

export const addLoading = (weatherLoading: boolean) => ({
    type: 'GET_WEATHER_LOADING',
    weatherLoading
})

export const getAddressInfo = (address: string) => {
    const params = {
        query: address,
        'access_key': process.env.REACT_APP_ADDRESS_KEY
    }
    const url = '/v1/forward'

    return (dispatch: any) => {
        addressApi.get(url, {
            params,
        }).then(({ data }) => {
            const [address] = data.data
            dispatch(getWeatherInfo(address))
        }).catch((error) => console.log(error));
    }
}

export const getWeatherInfo = ({ latitude, longitude }: GetWeatherInfoProps) => {
    const url = `/points/${latitude},${longitude}`
    return (dispatch: any) => {
        weatherApi.get(url).then((response) => {
            const { data: { properties: { forecast } } } = response
            dispatch(getWeatherPeriodInfo(forecast))
        }).catch((error) => console.log(error));
    }
}

export const getWeatherPeriodInfo = (periodUrl: string) => {
    return (dispatch: any) => {
        dispatch(addLoading(true))
        generalApi({ baseURL: periodUrl })
            .then(({ data }: { data: any }) => {
                const list = handleGroupSameDay(data?.properties?.periods || [])
                dispatch(addWeatherInfo(list))
            })
            .catch((error) => console.log(error))
            .finally(() => dispatch(addLoading(false)));
    }
}