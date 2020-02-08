import React from 'react';

function TodoItem(props)
{
    return( 
        <div>
        <li className="list-group-item" key={props.index}>{props.title} + {props.date.toLocaleTimeString()}</li>
        <button onClick={ (event) => props.deleteTodo(props.id,event) } className="btn btn-danger">x</button>
        </div>)
}

export default TodoItem;