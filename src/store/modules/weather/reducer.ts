import { WeatherProps } from "../../../modules/weather/Weather.type";

const initialState = {
    weatherPeriod: [],
    weatherLoading: false
}

const weather = (state = { ...initialState }, action: WeatherProps) => {
    switch (action.type) {
        case 'GET_WEATHER_PERIOD':
            return {
                ...state,
                weatherPeriod: action.weatherPeriod
            }
        case 'GET_WEATHER_LOADING':
            return {
                ...state,
                weatherLoading: action.weatherLoading
            }
        default:
            return state;
    }
}

export default weather;