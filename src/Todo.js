import React, {useContext} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';
import {TodosContext} from './context/todos.context'

function Todo({completed, name, id}){
    const {dispatch} = useContext(TodosContext);
    const[isEditing, toggle] = useToggle(false);
  
    return (
        <ListItem key={id}>
            {isEditing ? (<EditTodoForm id={id} toggleEditForm={toggle} name={name}/>): (
            <>
            <Checkbox onClick={() => dispatch({type:'TOGGLE_TODO', id:id })} tabIndex={-1} checked={completed}/>
              <ListItemText  style={{textDecoration: completed ? "line-through" : null}}>
                  {name}
              </ListItemText>
              <ListItemSecondaryAction>
                  <IconButton  onClick={() => dispatch({type: 'REMOVE', id:id})} aria-label="Delete">
                      <DeleteIcon/>
                  </IconButton>
                  <IconButton  aria-label="Edit" onClick={toggle}>
                      <EditIcon/>
                  </IconButton>
              </ListItemSecondaryAction>
              </>)}
            </ListItem>
    )
}

export default Todo;