import React from "react";

class TodoItem extends React.Component {
    render() {
        return (
        <li>
            <input 
                type="checkbox" 
                checked={this.props.todoProp.completed}
                onChange={() => this.props.handleEventProp(this.props.todoProp.id)}
            /> 
            {this.props.todoProp.title} 
        </li>)
    }
}

export default TodoItem;