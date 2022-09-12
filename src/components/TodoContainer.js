import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
      console.log(todos)
      console.log(prevState.todos)
    }
  }
  // componentWillUnmount () {
  //   const temp = localStorage.getItem('todos')
  //   const loadedTodos = JSON.parse(temp);
  //   console.log(temp);
  //   if (loadedTodos) {
  //     this.setState({
  //       todos: loadedTodos
  //     })
  //   }
  //   console.log(loadedTodos)
  // }
      handleEvent = (id) => {
        const { todos } = this.state;
        this.setState({
          todos: todos.map((todo) => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          }),
        });
      };

      delTodo = (id) => {
        const { todos } = this.state;
        this.setState({
          todos: [
            ...todos.filter((todo) => todo.id !== id),
          ],
        });
      }

      addTodoItem = (title) => {
        const newTodo = {
          id: uuidv4(),
          title,
          completed: false,
        };
        const { todos } = this.state;
        this.setState({
          todos: [...todos, newTodo],
        });
      }

      setUpdate = (updatedTitle, id) => {
        const { todos } = this.state;
        this.setState({
          todos: todos.map((todo) => {
            if (todo.id === id) {
              todo.title = updatedTitle;
            }
            return todo;
          }),
        });
      }

      render() {
        const { todos } = this.state;
        return (
          <div className="container">
            <div className="inner">
              <InputTodo addTodoProps={this.addTodoItem} />
              <Header />
              <TodosList
                todosProps={todos}
                handleEventProps={this.handleEvent}
                deleteProps={this.delTodo}
                updateProps={this.setUpdate}
              />
            </div>
          </div>

        );
      }
}

export default TodoContainer;
