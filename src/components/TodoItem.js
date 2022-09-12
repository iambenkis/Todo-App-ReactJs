import React, {useState, useEffect} from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing ,setEditing] = useState(false)
  const handleEditing = () => {
    setEditing(true);
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...");
    }
  }, [])

  const handleUpdateDone = (e) => {
    if(e.key === 'Enter') {
      setEditing(false);
    }
  }
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
const { completed ,id, title } = props.todoProp;
  return (
    <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleEventProp(id)}
        />
        <button type="button" onClick={() => props.deleteProp(id)}>
          Deleted
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
        <div onDoubleClick={props.handEditing} style={viewMode}>...</div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            props.updateProps(e.target.value, id);
          }}
          onKeyDown={props.handleUpdateDone}
        />
    </li>);
}
export default TodoItem;
