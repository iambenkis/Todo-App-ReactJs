import React from "react";
state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
   };
class TodoContainer extends React.Component {
    render () {
        return (
            <React.Fragment>
                <h1>Hello from Create React App by Benkis</h1>
                <p>I am Benjamin Kisenge a web dev</p>
            </React.Fragment>
        )
    }
}

export default TodoContainer;