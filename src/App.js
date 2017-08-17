import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoform';
import TodoList from './components/TodoList';
import Message from './components/Message';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello World!</h2>
        </div>

          <div className="todo-list">
              <Message />
              <TodoForm />
              <TodoList />
          </div>
      </div>
    );
  }
}

export default App
