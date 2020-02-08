import React from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';


class Todos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      todos: [
        {
          id: 0,
          "title": "Finish my React course",
          "completed": true
        },
        {
          id: 1,
          "title": "Share Study React course",
          "completed": false
        },
        {
          id: 2,
          "title": "Deploy my React App",
          "completed": false
        }
      ]
    }
  }


  componentDidMount() {
    setTimeout(() => {
      console.log('Our todos is fetched');
      this.setState({
      })
    }, 1000)

  }

  deleteTodo = (id, event) => {
    let { todos } = this.state;
    todos.splice(id, 1);
    this.setState({
      todos: todos
    });
  }


  addTodo = (newTodo) => {

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  markComplete = (id) => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  render() {
    let { todos, msg } = this.state;
    let todosDone = todos.filter(item => item.completed==true)
    let todoTodo = todos.filter(item => item.completed==false)
    return (
      <React.Fragment>
        <h3>{msg}</h3>
        <TodoAdd addTodo={this.addTodo} />
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-group">
              {todoTodo.map((value, index) => {
                return <TodoItem markComplete={this.markComplete} deleteTodo={this.deleteTodo} id={value.id} title={value.title} completed={value.completed} index={index} />
              })}
            </ul>
          </div>

          <div className="col-lg-6">
          <ul className="list-group">
          {todosDone.map((value, index) => {
            return <TodoItem id={value.id} title={value.title} completed={value.completed} index={index}   />
          })}
        </ul>

          </div>
        </div>


      </React.Fragment>
    )
  }
}



export default Todos;