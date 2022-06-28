import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/base-style/base.css';
import App from './App';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import Header from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);


