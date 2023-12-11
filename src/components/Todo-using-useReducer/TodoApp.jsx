import { useReducer, useState } from "react";
import TodoInput from "./TodoInput";

const todoReducerFn = (state, { type, payload }) => {
  switch (type) {
    case "ADD": {
      state = [
        ...state,
        { id: Date.now(), value: payload, isCompleted: false }
      ];
      return state;
    }
    case "TOGGLE": {
      const newState = state.map((todo) => {
        if (todo.id === payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      return newState;
    }
    case "DELETE": {
      const newState = state.filter((todo) => todo.id !== payload);
      return newState;
    }
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducerFn, []);
  //Normal method using useState

  // const [todos, setTodos] = useState([]);
  // const handleAdd = (value) => {
  //   setTodos ([...todos, { id: Date.now(), value, isCompleted: false }]);
  // };

  // const toggleStatus = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id = id){
  //         todo.isCompleted = !todo.isCompleted;
  //       }
  //       return todo;
  //     })
  //   );
  // };

  // const handleDelete = (id) => {
  //   setTodos(todos.filter((todo)=> todo.id !== id))
  // }

  return (
    <div style={{ margin: "auto" }}>
      <h1>Todos</h1>
      <TodoInput
        handleAdd={(value) => dispatch({ type: "ADD", payload: value })}
      />
      {todos.map((todo) => (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "grid",
            gridTemplateColumns: "repeat(3,10%)",
            margin: "10px"
          }}
        >
          <span key={todo.value} onClick={() => toggleStatus(todo.id)}>
            {todo.value} - {todo.isCompleted ? "Completed" : "Not Completed"}
          </span>
          <button
            style={{ margin: "auto", padding: "10px" }}
            onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
          >
            Toggle
          </button>
          <button
            style={{ margin: "auto", padding: "10px" }}
            onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
