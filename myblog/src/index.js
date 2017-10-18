import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,browserHistory,hashHistory} from 'react-router';


import routes from './routes.js';

ReactDOM.render(
    (<Router history={browserHistory}>
        {routes}
</Router>),document.getElementById('container')
)
