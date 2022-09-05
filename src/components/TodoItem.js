import React from "react";
import styles from "./TodoItem.module.css"
class TodoItem extends React.Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
        const {completed , id, title} = this.props.todoProp
        return (
        <li className={styles.item}>
            <input 
                type="checkbox" 
                className={styles.checkbox}
                checked={completed}
                onChange={() => this.props.handleEventProp(id)}
            /> 
            <button onClick={() => this.props.deleteProp(id)}>
                Deleted
            </button>
            <span style={completed ? completedStyle : null}>
                {title} 
            </span>
        </li>)
    }
}

export default TodoItem;