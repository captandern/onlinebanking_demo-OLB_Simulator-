import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
    BrowserRouter as Router
} from "react-router-dom";
import {
    Routes
} from "./Routes.js";
import * as serviceWorker from "./serviceWorker";
<BrowserRouter basename="/reactbank" />
ReactDOM.render( <
    Router basename = {
        process.env.PUBLIC_URL
    } >
    <
    Routes / >
    <
    /Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();