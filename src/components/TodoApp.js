import React, { Component } from "react";
import Header from "./layouts/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { uuid } from "uuidv4";

class TodoApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  handleAddTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <Todos
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default TodoApp;
