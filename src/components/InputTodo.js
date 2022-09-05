import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const { title } = this.state;
      const { addTodoProps } = this.props;
      if (title.trim()) {
        addTodoProps(title);
        this.setState({
          title: '',
        });
      } else {
        alert('Please write item');
      }
    }

    render() {
      const { onChange, handleSubmit, state } = this;
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Todo"
            className="input-text"
            name="title"
            value={state.title}
            onChange={onChange}
          />
          <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
      );
    }
}

export default InputTodo;
