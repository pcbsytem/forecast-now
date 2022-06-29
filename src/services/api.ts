import axios from 'axios'

const addressApi = axios.create({
    baseURL: process.env.REACT_APP_ADDRESS_API,
})

const weatherApi = axios.create({
    baseURL: process.env.REACT_APP_WEATHER_API,
})

const generalApi = async ({ baseURL }: { baseURL: string }) => {
    return new Promise((resolve, reject) => {
        axios.get(baseURL).then((response) => {
            resolve(response)
        }).catch((error) => reject(error));
    })
}

export {
    addressApi,
    generalApi,
    weatherApi
}