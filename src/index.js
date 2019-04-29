import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import defaultState from './store/defaultState';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const store = configureStore(defaultState);
render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


