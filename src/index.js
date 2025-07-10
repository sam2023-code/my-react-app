//Better after React ver18
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

import './i18n'; // Import the i18n configuration

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));

//old version
/*
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
*/