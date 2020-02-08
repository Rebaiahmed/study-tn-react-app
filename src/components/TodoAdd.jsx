import React, { Component } from 'react';

class TodoAdd extends Component {

  constructor(props)
  {
      super(props)
      this.state={
        todo :'',
      }

  }


  onChange = (e)=>{
      this.setState({'todo':e.target.value})
  }


  submit = (event)=>{
    event.preventDefault();
       let {todo} = this.state;
      if(!todo)
      {
        alert("Cannot be empty") 
      }else{
           
        this.props.addTodo({"title":todo,"completed": false});
        this.setState({todo:''})
      } 

   

  }



    render() {
        return (
            <div>
            <form onSubmit={this.submit} className="form-inline">
             <div className="form-group mb-2">
            <input type="text" name="todo" placeholder="Add Todo .." class="form-control" value={this.state.todo} onChange={this.onChange} />
            </div>
            <button type="submit" className="btn btn-primary mb-2">+</button>
            </form>
                
            </div>
        );
    }
}

export default TodoAdd;