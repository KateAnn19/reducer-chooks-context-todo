import { v4 as uuidv4 } from "uuid";

export const formReducer = (state, action) => {
  switch (action.type) {
    //spread what's in state already
    case "ADD":
      return [...state, { id: uuidv4(), name: action.name, completed: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    case "TOGGLE_TODO":
      return state.map((todo) =>
    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
  );
    case "EDIT":
      return state.map((todo) =>
      todo.id === action.id ? { ...todo, name: action.newTask } : todo
    );
    default:
      return state;
  }
};

export default formReducer;





