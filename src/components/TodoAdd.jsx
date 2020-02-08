import React, { Component } from 'react';

class TodoAdd extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
    }


    onChange = (event)=>{
        this.setState({'todo':event.target.value})
    }


    submit = (event) =>{
        event.preventDefault();
        let { todo}=this.state;
        if(!todo)
        {
            alert("Not valid")
        }else{
            this.props.addTodo({'title':todo,'status':false});
        }
    }




    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.submit} >
                    <div className="form-group">
                        <input type="text" placeholder="Add Todo .." name="todo"  value={this.state.todo}
                        onChange={this.onChange}  />
                    </div>

                    <button type="submit" className="btn btn-primary">+</button>

                </form>

            </div>
        );
    }
}

export default TodoAdd;