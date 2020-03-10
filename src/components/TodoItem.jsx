import React from 'react';

function TodoItem(props) {

    if(props.completed)
    {
  return (
      <div>
      <li className="list-group-item" key={props.index}>
      <label className="form-check-label" htmlFor="exampleCheck1">{props.title}</label>
      </li>
      </div>
  )
    }else{
        return (
            <div>
    
                <li className="list-group-item" key={props.index}>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" value={props.completed}
                        onChange={(e)=>props.markComplete(props.id)} />
                        <label className="form-check-label" htmlFor="exampleCheck1">{props.title}</label>
                        <button type="button"  onClick={(event) => props.deleteTodo(props.id, event)} className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                       
                    </div>
    
                </li>
    
            </div>)
    }
    
}

export default TodoItem;