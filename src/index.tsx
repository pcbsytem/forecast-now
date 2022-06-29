import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";

import "rsuite/dist/rsuite.min.css";
import "react-loading-skeleton/dist/skeleton.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
