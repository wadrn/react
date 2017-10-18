import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component{
    render(){
        let {todos,onTodoClick} = this.props;
        return(
            <ul className="todolist">
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={()=>onTodoClick(todo.id)}/>
                ))}
            </ul>
        )
    }
}
