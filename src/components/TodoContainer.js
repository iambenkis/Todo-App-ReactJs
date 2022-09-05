import React from "react";
import TodosList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
class TodoContainer extends React.Component {
    state = {
        todos: []
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
      addTodoItem = title => {
        const newTodo = {
          id : uuidv4(),
          title : title,
          completed: false
        };
        this.setState({
          todos : [...this.state.todos, newTodo]
        })
      }
      setUpdate = (updatedTitle, id) => {
        this.setState({
          todos: this.state.todos.map(todo => {
            if(todo.id ===id) {
              todo.title = updatedTitle
            }
            return todo
          })
        })
      }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
          .then(response => response.json())
          .then(data => this.setState({ todos: data }));
      }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
          const temp = JSON.stringify(this.state.todos)
          localStorage.setItem("todos", temp)
        }
    }
    render () {
        return (
          <div className="container">
              <div className="inner">
                  <InputTodo addTodoProps={this.addTodoItem}/>
                  <Header />
                  <TodosList 
                      todosProps={this.state.todos} 
                      handleEventProps={this.handleEvent} 
                      deleteProps= {this.delTodo}
                      updateProps = {this.setUpdate}
                  />
              </div>
          </div>
            
        );
    }
}

export default TodoContainer;