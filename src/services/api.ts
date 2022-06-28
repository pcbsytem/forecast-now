import axios from 'axios'

const addressApi = axios.create({
    baseURL: process.env.REACT_APP_ADDRESS_API_2,
})

const weatherApi = axios.create({
    baseURL: process.env.REACT_APP_WEATHER_API,
})

const generalApi = ({ baseURL }: { baseURL: string }) =>
    axios.create({
        baseURL,
    })


export {
    addressApi,
    generalApi,
    weatherApi
}