import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todosProps, handleEventProps, deleteProps, updateProps,
  } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          todoProp={todo}
          handleEventProp={handleEventProps}
          deleteProp={deleteProps}
          updateProps={updateProps}
        />
      ))}
    </ul>
  );
};

export default TodosList;
