import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

export default class App extends React.Component{

    render(){
        return (
            <div className="content">
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
 }
