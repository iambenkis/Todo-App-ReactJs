import React from "react";
import ReactDOM from "react-dom";

//Import file
import TodoContainer from "./components/TodoContainer"; 
const root = document.getElementById('root');
/* <React.StrictMode>
<TodoContainer/>
</React.StrictMode> */
ReactDOM.render( <TodoContainer/> , root);
