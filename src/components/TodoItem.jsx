import React from 'react';

function TodoItem(props) {

    if(props.completed)
    {
  return (
      <div>
      <li className="list-group-item" key={props.index}>
      <label class="form-check-label" for="exampleCheck1">{props.title}</label>
      </li>
      </div>
  )
    }else{
        return (
            <div>
    
                <li className="list-group-item" key={props.index}>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" value={props.completed}
                        onChange={(e)=>props.markComplete(props.id)} />
                        <label class="form-check-label" for="exampleCheck1">{props.title}</label>
                        <button type="button"  onClick={(event) => props.deleteTodo(props.id, event)} className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                       
                    </div>
    
                </li>
    
            </div>)
    }
    
}

export default TodoItem;