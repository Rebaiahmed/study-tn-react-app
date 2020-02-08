import React from 'react';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';


class Todos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      data: [
        {
          id: 0,
          "title": "Finish my React course",
          "status": false
        },
        {
          id: 1,
          "title": "Share Study React course",
          "status": false
        },
        {
          id: 2,
          "title": "Deploy my React App",
          "status": false
        }
      ]
    }
  }


  componentDidMount() {
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
      })
    }, 1000)

  }

  deleteTodo = (id,event) => {
    alert("event"+event.type);
    let { data } = this.state;
    data.splice(id, 1);
    this.setState({
      data: data
    });
  }

 
  addTodo = (newItem) =>{
    this.setState({data:[...this.state.data,newItem]});
  }


  render() {
    let { data, msg } = this.state;
    return (
      <React.Fragment>
        <h3>{msg}</h3>
        <TodoAdd addTodo={this.addTodo}/>
        <ul className="list-group">
          {data.map((value, index) => {
            return <TodoItem deleteTodo={this.deleteTodo} id={value.id} title={value.title} index={index} date={new Date()} />
          })}
        </ul>

      </React.Fragment>
    )
  }
}



export default Todos;