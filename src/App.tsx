import React from "react";
import { Provider } from "react-redux";
import Weather from "./modules/weather/Weather";
import Store from "./store/Store";
import "./App.css";

function App() {
  return (
    <Provider store={Store}>
      <Weather />
    </Provider>
  );
}

export default App;
