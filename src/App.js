import React, { Component } from 'react';

import List from './List';
import Input from './Input';
import Reset from './Reset';

class App extends Component {
  constructor(props) {
    super(props);
    
    const todoStorage = localStorage.getItem('todo');
    const todoList = todoStorage 
                      ? JSON.parse(todoStorage)
                      : [];
    
    this.state = {
      todo: todoList
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  // 新規追加
  addTodo(value) {
    // 追加
    this.state.todo.push({ title: value });
    // 保存
    this.setState({ todo: this.state.todo });
    // localstorage更新
    this.saveStorage();
  }

  // localStorageを更新
  saveStorage() {
    const json = JSON.stringify(this.state.todo);
    localStorage.setItem('todo', json);
  }

  // 削除機能
  deleteTodo(idx) {
    // 削除
    this.state.todo.splice(idx, 1);
    // 保存
    this.setState({ todo: this.state.todo });
    // localstorage更新
    this.saveStorage();
  }

  // リセット機能
  resetTodo() {
    // 削除
    this.state.todo = [];
    // 更新
    this.setState({ todo: this.state.todo });
    // localstorage更新
    this.saveStorage();
  }

  render() {
    return (
      <React.Fragment>
        <h1>七夕アプリ</h1>
        <List todo={this.state.todo} onClick={this.deleteTodo} />
        <Input onClick={this.addTodo} />
        <Reset onClick={this.resetTodo} />
      </React.Fragment>
    );
  }
}

export default App;