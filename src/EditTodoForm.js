import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import {TodosContext} from "./context/todos.context";

function EditTodoForm({name, id, toggleEditForm}) {
  const [value, handleChange, reset] = useInputState(name);
 const{dispatch} = useContext(TodosContext);


  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        dispatch({type: 'EDIT', id: id, newTask: value});
        reset();
        toggleEditForm();
    } }>
      <TextField margin="normal" onChange={handleChange} value={value} fullWidth />
    </form>
  );
}

export default EditTodoForm;
