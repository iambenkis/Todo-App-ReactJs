import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const {
    handleEventProp, deleteProp, updateProps, todoProp,
  } = props;
  const { id, title, completed } = todoProp;
  const { item, checkbox, textInput } = styles;
  return (
    <li className={item}>
      <input
        type="checkbox"
        className={checkbox}
        checked={completed}
        onChange={() => handleEventProp(id)}
      />
      <button type="button" onClick={() => deleteProp(id)} className="deleteBtn">
        <FaTrashAlt />
      </button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
      <div onDoubleClick={handleEditing} style={viewMode}>...</div>
      <input
        type="text"
        style={editMode}
        className={textInput}
        value={title}
        onChange={(e) => {
          updateProps(e.target.value, id);
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};
export default TodoItem;
