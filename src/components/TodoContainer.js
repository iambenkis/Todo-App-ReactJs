import React from "react";
import TodosList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
class TodoContainer extends React.Component {
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: true
          }
        ]
       };
       handleEvent = id => {
          this.setState({
            todos: this.state.todos.map(todo =>{
              if(todo.id === id) {
                todo.completed = !todo.completed;
              }
              return todo;
            })
          })
      }; 
      delTodo = (id) => {
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !==id;
            })
          ]
        })
      }
    render () {
        return (
            <div>
                <InputTodo />
                <Header />
                <TodosList 
                    todosProps={this.state.todos} 
                    handleEventProps={this.handleEvent} 
                    deleteProps= {this.delTodo}
                />
            </div>
        );
    }
}

export default TodoContainer;