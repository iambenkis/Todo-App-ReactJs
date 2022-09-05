import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  componentWillUnmount() {
    // console.log('Cleaning up...');
  }

    handleUpdateDone = (e) => {
      if (e.key === 'Enter') {
        this.setState({ editing: false });
      }
    }

    handEditing = () => {
      this.setState({
        editing: true,
      });
    }

    render() {
      const viewMode = {};
      const editMode = {};
      const { editing } = this.state;
      if (editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }
      const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
      const {
        todoProp, handleEventProp, deleteProp, updateProps,
      } = this.props;
      return (
        <li className={styles.item}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todoProp.completed}
            onChange={() => handleEventProp(todoProp.id)}
          />
          <button type="button" onClick={() => deleteProp(todoProp.id)}>
            Deleted
          </button>
          <span style={todoProp.completed ? completedStyle : null}>
            {todoProp.title}
          </span>
          <div onDoubleClick={this.handEditing} style={viewMode}>...</div>
          <input
            type="text"
            style={editMode}
            className={styles.textInput}
            value={todoProp.title}
            onChange={(e) => {
              updateProps(e.target.value, todoProp.id);
            }}
            onKeyDown={this.handleUpdateDone}
          />
        </li>
      );
    }
}

export default TodoItem;
