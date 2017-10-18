import React from 'react';
import ReactDOM from 'react-dom';
import {Route,IndexRoute,Link} from 'react-router';

import App from './pages/app.js';
import Home from './pages/home.js';
import About from './pages/about.js';
import Projects from './pages/projects.js';
import Four0Four from './pages/404.js';
import Node from './pages/p_node.js';


export default (
    <Route name="app" breadcrumbName="App" path="/" component={App}>
        <IndexRoute name="home" breadcrumbName="Home" component={Home}/>
        <Route name="about" breadcrumbName="About" path="about" component={About}/>
        <Route name="projects" breadcrumbName="Projects" path="projects" component={Projects}>
            <Route name='node' breadcrumbName="Node" path="node" component={Node}/>
        </Route>
        <Route path="*" component={Four0Four}/>
    </Route>
)
