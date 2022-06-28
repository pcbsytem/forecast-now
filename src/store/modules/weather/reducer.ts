const weather = (state = {}, action: {
    address: any;
    weather: any;
    type: any;
    payload: any;
}) => {
    switch (action.type) {
        case 'GET_WEATHER_INFO':
            return {
                ...state,
                weather: action.weather
            }
        case 'ADD_ADDRESS_INFO':
            return {
                ...state,
                address: action.address
            }
        default:
            return state;
    }
}

export default weather;