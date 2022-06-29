export interface SearchInputProps {
    placeholder: string
    action: Function
    width: string
    size: string
}

export interface GetWeatherInfoProps {
    latitude: number,
    longitude: number
}
export interface AddWeatherInfoProps {
    number: number,
    name: string,
    startTime: string,
    endTime: string,
    isDaytime: boolean,
    temperature: number,
    temperatureUnit: string,
    temperatureTrend: null,
    windSpeed: string,
    windDirection: string,
    icon: string,
    shortForecast: string,
    detailedForecast: string
}

export interface WeatherPeriodListProps {
    list: AddWeatherInfoProps[][]
}

export interface WeatherProps {
    weatherPeriod: any;
    type: string;
    weatherLoading: boolean;
}