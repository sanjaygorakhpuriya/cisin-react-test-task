import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import AWN from 'awesome-notifications';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

const notifier = new AWN() // where options is an object with your custom values



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App notifier={notifier} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
