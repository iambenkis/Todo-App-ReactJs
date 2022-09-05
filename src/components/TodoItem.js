import React from "react";

class TodoItem extends React.Component {
    render() {
        return <li>{this.props.todoProp.title}</li>
    }
}

export default TodoItem;