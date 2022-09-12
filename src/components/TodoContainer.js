import React, {useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

// class TodoContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
//       .then((response) => response.json())
//       .then((data) => this.setState({ todos: data }));
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { todos } = this.state;
//     if (prevState.todos !== todos) {
//       const temp = JSON.stringify(todos);
//       localStorage.setItem('todos', temp);
//       console.log(todos)
//       console.log(prevState.todos)
//     }
//   }
//       handleEvent = (id) => {
//         const { todos } = this.state;
//         this.setState({
//           todos: todos.map((todo) => {
//             if (todo.id === id) {
//               todo.completed = !todo.completed;
//             }
//             return todo;
//           }),
//         });
//       };

//       delTodo = (id) => {
//         const { todos } = this.state;
//         this.setState({
//           todos: [
//             ...todos.filter((todo) => todo.id !== id),
//           ],
//         });
//       }

//       addTodoItem = (title) => {
//         const newTodo = {
//           id: uuidv4(),
//           title,
//           completed: false,
//         };
//         const { todos } = this.state;
//         this.setState({
//           todos: [...todos, newTodo],
//         });
//       }

//       setUpdate = (updatedTitle, id) => {
//         const { todos } = this.state;
//         this.setState({
//           todos: todos.map((todo) => {
//             if (todo.id === id) {
//               todo.title = updatedTitle;
//             }
//             return todo;
//           }),
//         });
//       }

//       render() {
//         const { todos } = this.state;
//         return (
//           <div className="container">
//             <div className="inner">
//               <InputTodo addTodoProps={this.addTodoItem} />
//               <Header />
//               <TodosList
//                 todosProps={todos}
//                 handleEventProps={this.handleEvent}
//                 deleteProps={this.delTodo}
//                 updateProps={this.setUpdate}
//               />
//             </div>
//           </div>

//         );
//       }
// }

const TodoContainer = (props) => {
  const getInitialTodos = () => {
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  const [todos, setTodos] = useState(getInitialTodos());
  useEffect(() => {
    console.log("test run");
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  },[setTodos])

  const handleEvent = (id) => {
    setTodos( prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed : !todo.completed
          }
        }
          return todo;
      })
  )
  }

  const delTodo = id => {
    setTodos([
         ...todos.filter(todo => {
          return todo.id !==id
        })
   ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    }

    setTodos([...todos, newTodo])
  }

  const setUpdate = (updateTitle ,id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updateTitle;
        }
        return todo;
      })
    )
  }
  return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodosList
            todosProps={todos}
            handleEventProps={handleEvent}
            deleteProps={delTodo}
            updateProps={setUpdate}
          />
        </div>
      </div>
  )
}

export default TodoContainer;
