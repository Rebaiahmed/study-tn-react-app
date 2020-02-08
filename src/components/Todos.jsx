import React from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';
import axios from 'axios';


class Todos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      todos: [

      ]
    }
  }


  componentDidMount() {

    this.getTodos()
  }


  getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({ todos: res.data })
      }).catch(err => {
        console.log('err' + err);
      })
  }

  deleteTodo = (id, event) => {

    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => {
        console.log('res' + res);
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id != id)] })

      }).catch(err => {
        console.log('err' + err);
      })

  }


  addTodo = (newTodo) => {

    axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .then(res => {
        this.setState({ todos: [...this.state.todos, res.data] })
      }).catch(err => {
        console.log('err' + err);
      })


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
    let todosDone = todos.filter(item => item.completed == true)
    let todoTodo = todos.filter(item => item.completed == false)
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
                return <TodoItem id={value.id} title={value.title} completed={value.completed} index={index} />
              })}
            </ul>

          </div>
        </div>


      </React.Fragment>
    )
  }
}



export default Todos;