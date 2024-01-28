import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/sass/global.scss";
import App from "./App";
import * as serviceWorker from "./components/serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
