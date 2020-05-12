import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import useTodoState from "./hooks/useTodoState";
import {TodosProvider} from "./context/todos.context";

function TodoApp(props) {
 return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container style={{ marginTop: "1rem" }}>
        <Grid item xs={11} m={8} lg={4}></Grid>
        <TodosProvider>
        {/* <TodoForm addTodo={addTodo} todos={todos} /> */}
        {/* context allows us to move these */}
        <TodoForm/>
        <TodoList
        //context gives us these 
        //   toggleTodo={toggleTodo}
        //   removeTodo={removeTodo}
        //   updateTodo={updateTodo}
        //   todos={todos}
        />
        </TodosProvider>
      </Grid>
    </Paper>
  );
}

export default TodoApp;

//App Structure

//- TodoApp
// - TodoForm
// - TodoList
// - TodoItem

//Methods

//add todo
//delete todo
//update todo
//toggle todo

//----------------------------------------------------------------------------------------
//these were put into a custom hook for readability
//----------------------------------------------------------------------------------------

// const addTodo = newTodoText => {
//     setTodos([...todos, {id: uuidv4(), name: newTodoText, completed: false}])
// }
// const removeTodo = todoId => {
//     const updatedTodos= todos.filter(todo => todo.id !== todoId);
//     setTodos(updatedTodos);
// }
// const toggleTodo = todoId => {
//     const updatedTodos = todos.map(todo =>
//         todo.id === todoId ? {...todo, completed: !todo.completed}: todo
//     );
//    setTodos(updatedTodos);
// }

// const updateTodo = (id, editedTodo) => {

//     const updatedTodos = todos.map(todo =>

//         todo.id === id ? {...todo, name: editedTodo}: todo
//     )
//     setTodos(updatedTodos);
// }





//-----------------------------------------------
//with context all this was moved out
//----------------------------------------------

//     const initialTodos = [
//         {
//           name: "go for run",
//           id: uuidv4(),
//           completed: false,
//         },
//         {
//           name: "put grocery order in",
//           id: uuidv4(),
//           completed: false,
//         },
//         {
//           name: "re-fill graham's bowl",
//           id: uuidv4(),
//           completed: false,
//         },
//       ];
//   // const [todos, setTodos] = useState(initialTodos);
 
//   const { todos, addTodo, removeTodo, toggleTodo, updateTodo } = useTodoState(
//     initialTodos
//   );