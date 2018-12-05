import React, { Component } from 'react';
// import './App.css';
import List from './List';
import TodoForm from './TodoForm';

class App extends Component {
  state = { todos: [] }

  getUniqId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  handleClick = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }

 addItem = (name) => {
 const { todos } = this.state;
 const todo = { name, id: this.getUniqId(), complete: false }
 this.setState({ todos: [todo, ...todos] });
 }


 render() {
 const { todos } = this.state;

 return (
 <div>
 <List name="Todo List" items={todos} todoClick={this.handleClick} />
 <TodoForm addItem={this.addItem} />

 </div>
 
 );
 }
}

export default App;
