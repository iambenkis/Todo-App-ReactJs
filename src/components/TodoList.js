import React from "react";
import TodoItem from "./TodoItem"; 

class TodosList extends React.Component {
    render () {
        return (
            <ul>
                {this.props.todosProps.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todoProp={todo}
                        handleEventProp={this.props.handleEventProps} 
                    />
                ))}
            </ul>
        )
    }
}

export default TodosList;