//todos
//all methods to interact w/todos
import React, {createContext, useReducer} from 'react';
import todoReducer from '../reducers/todo.reducer';
// import useTodoState from '../hooks/useTodoState';
const defaultTodos = [
    {id:1, name: 'go to bank', completed: false},
    {id:2, name: 'go to doctor', completed: false}
]

export const TodosContext = createContext()

export function TodosProvider(props){
    // const {todos, addTodo, removeTodo, toggleTodo, updateTodo} = useTodoState(defaultTodos);
   // const todosInfo= useTodoState(defaultTodos);
   const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    return(
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}