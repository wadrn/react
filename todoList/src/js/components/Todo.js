import React from 'react';

export default class Todo extends React.Component{

    render(){
        let {onClick,completed,text} = this.props;
        const style ={
            textDecoration:completed? 'line-through':'none',
            background:completed?'pink':'lightgreen'
        }
        return(
            <li onClick={onClick.bind(this)} style={style}>
                {text}
            </li>
        )
    }
}
