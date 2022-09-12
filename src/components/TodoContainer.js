import React, {useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

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
