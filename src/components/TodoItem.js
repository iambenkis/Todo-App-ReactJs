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
        return (
        <li className={styles.item}>
            <input 
                type="checkbox" 
                className={styles.checkbox}
                checked={this.props.todoProp.completed}
                onChange={() => this.props.handleEventProp(this.props.todoProp.id)}
            /> 
            <button onClick={() => this.props.deleteProp(this.props.todoProp.id)}>
                Deleted
            </button>
            <span 
                style={this.props.todoProp.completed ? completedStyle : null}>
                {this.props.todoProp.title} 
            </span>
        </li>)
    }
}

export default TodoItem;