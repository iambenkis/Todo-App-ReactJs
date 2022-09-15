import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setTile] = useState({
    title: '',
  });
  const onChange = (e) => {
    setTile({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoProps } = props;
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setTile({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };
  // const { onChange, handleSubmit, state } = props;
  return (
    <form onSubmit={handleSubmit} className="addForm">
      <input
        type="text"
        placeholder="Add Todo"
        className="input-text"
        name="title"
        value={inputText.title}
        onChange={onChange}
      />
      <button type="submit" onSubmit={handleSubmit} className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};
export default InputTodo;
