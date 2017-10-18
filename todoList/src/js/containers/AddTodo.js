import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';

let AddTodo = ({dispatch}) =>{
    let input
    return (
        <div className="addOne">
            <form onSubmit={e=>{
                e.preventDefault();
                if(!input.value.trim()){
                    return
                }
                dispatch(addTodo(input.value))
                input.value=""
            }}>
                <input className="input" ref={node=>{ /*ref设置为回调函数，回调函数的参数为该组件的具体实例node就是这个input*/
                    input=node
                }}/>
                <button type="submit" className="btn btn-primary add">
                    Add Todo
                </button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo);
export default AddTodo
