import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddForm';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  
  deleteTodo = (id) => {
    console.log(id)
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos // if key and value have the same name no need to assing using :
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo AddTodo={this.addTodo}/>
       
      </div>
    );
  }
}

export default App;
