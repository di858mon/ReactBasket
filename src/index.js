import React from "react";
import ReactDOM from "react-dom";

import { createStore } from 'redux';
import App from "./App";
import rootReducer from "./reducers";
import initialState from "./store/initialState";

const store = createStore (rootReducer, initialState);

ReactDOM.render(<App />, document.getElementById("root"));
