import React, { Component } from "react";

import ToDoListItem from "./components/toDoListItem";

class App extends Component {
  state = {
    todoListTitle: "My Codo List",
    todos: ["Walk to CS196", "Get pineapple"]
  };
  removeParameter = () => {
    this.setState({
      todos: [],
      todoListTitle: []
    })
  };
render() {
  return (
    <div>
      <h1>{this.state.todoListTitle}</h1>
      {this.state.todos.map(x => (
        <ToDoListItem todo={x} />
      ))}
      <button onClick={this.removeParameter}> remove</button>
    </div>
  )
  }
}


export default App;
