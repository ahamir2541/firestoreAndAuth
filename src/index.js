import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import store from './Redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


