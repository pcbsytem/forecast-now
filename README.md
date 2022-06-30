# Weather Forecast

This project is a weather forecast that show weather info about a specific address.

https://user-images.githubusercontent.com/19713358/176558991-29a71148-edb6-469f-a06f-c38aa03789a8.mov


## WEB
<img width="1000" alt="Captura de Tela 2022-06-29 às 19 59 44" src="https://user-images.githubusercontent.com/19713358/176559630-1a58ab04-c133-4e6d-ba49-554066c432b7.png">


## Phone
<img width="375" alt="Captura de Tela 2022-06-29 às 19 58 28" src="https://user-images.githubusercontent.com/19713358/176559507-59c65b39-bb4f-44c4-b06f-11c967e2f21e.png">

## Before to run

Fill enviroment vars with url services and key 

- 1 - https://api.weather.gov - I used to get the weather info
- 2 - http://api.positionstack.com - I used to get latitude and longitude of the an address
- 3 - The token key I got <a href="https://positionstack.com">here</a>

```
REACT_APP_WEATHER_API=(weather info service here)
REACT_APP_ADDRESS_API=(adress latitude and longitude service here)
REACT_APP_ADDRESS_KEY=(token key here)
```

## Available Scripts

How to run?
```
npm start
```

How to test?
```
npm test
```

## Frameworks and libs used

- ReactJs - <a href="https://pt-br.reactjs.org/">pt-br.reactjs.org/</a> (Lib estrutural)
- React Suite - <a href="https://rsuitejs.com/">rsuitejs.com/</a> (Framework React Componentes)
- Redux - <a href="https://redux.js.org/">redux.js.org/</a> (Gerenciador de estado)
- Axios - <a href="https://github.com/axios/axios">github.com/axios/axios</a> (Lib para fazer requisições HTTP client)
- Redux-Thunk - <a href="https://github.com/reduxjs/redux-thunk">github.com/reduxjs/redux-thunk</a> (Lib para gerenciar requisições com Redux)
- Styled Components - <a href="https://styled-components.com">styled-components.com</a> 
