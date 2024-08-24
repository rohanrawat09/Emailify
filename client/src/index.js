import 'materialize-css/dist/css/materialize.min.css'; // Use import style for CSS
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Correctly import thunk middleware

import App from './component/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk)); // Use the correct variable 'thunk'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
console.log(process.env.REACT_APP_STRIPE_KEY);
console.log(process.env.NODE_ENV);