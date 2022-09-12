import React, { useState } from 'react';

const InputTodo = (props) => {
    const [title ,setTile] = useState("");
    const onChange = (e) => {
      setTile(e.target.value)
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // const { title } = this.state;
      // const { addTodoProps } = this.props;
      if (title.trim()) {
        props.addTodoProps(title);
        setTile("");
      } else {
        alert('Please write item');
      }
    }
  // const { onChange, handleSubmit, state } = props;
  return (
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add Todo"
              className="input-text"
              name="title"
              value={title}
              onChange={onChange}
            />
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
  )
}
export default InputTodo;
