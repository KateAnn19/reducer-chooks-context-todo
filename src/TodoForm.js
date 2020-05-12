import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import {TodosContext} from "./context/todos.context";

function TodoForm(){
    const[value, handleChange, reset] = useInputState("");
    
//input is fully controlled 

const {dispatch} = useContext(TodosContext);
 
const onSubmit = (e) => {
    e.preventDefault();
    dispatch({type: "ADD", name: value});
    reset();
}
    return(
        <Paper style={{margin: "2rem 0", padding: "0 27rem 0 24rem"}}>
            <form onSubmit={onSubmit}>
            <TextField onChange={handleChange} value={value} margin="normal" label="Add New Todo" fullWidth/>
            </form>
        </Paper>
    )
}

export default TodoForm;