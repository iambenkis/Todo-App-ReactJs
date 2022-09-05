import React from "react";
import styles from "./TodoItem.module.css"
class TodoItem extends React.Component {
    state = {
        editing : false
    }
    handEditing = () => {
        this.setState({
            editing: true
        })
    }
    handleUpdateDone = e => {
        if(e.key ==="Enter") { 
            this.setState({editing : false})
        }
    }
    render() {
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
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
            <div onDoubleClick={this.handEditing} style={viewMode}>...</div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e=> {
                    this.props.updateProps(e.target.value,id)
                }}
                onKeyDown={this.handleUpdateDone}
            />
        </li>)
    }
}

export default TodoItem;