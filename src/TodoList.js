import React, {useContext} from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";


import {TodosContext} from "./context/todos.context";

import Todo from './Todo';

function TodoList() {
    const {todos} = useContext(TodosContext);
   
    if(todos.length)
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={i}>
            <Todo {...todo} key={todo.id} />
            {i < todos.length - 1 && <Divider/>}
            </React.Fragment>
        ))}
      </List>
    </Paper>
  );
  return null;
}

export default TodoList;

//these were being passed as props but removed them and passed {...todo} instead 

// id={todo.id}
// completed={todo.completed}
// name={todo.name}
