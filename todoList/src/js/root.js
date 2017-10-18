import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';
import App from './components/App';
require('../../index.html');
require('../css/style.css');
// import 'bootstrap/dist/css/bootstrap.css';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("container")
)
