import React from 'react';
import ReactDOM from 'react-dom';
import {Route,IndexRoute,Link} from 'react-router';

export default class Node extends React.Component{
    componentWillMount(){
        console.log('node will mount');
    }
    render(){
        return (
            <div>node.js文章</div>
        )
    }
}
