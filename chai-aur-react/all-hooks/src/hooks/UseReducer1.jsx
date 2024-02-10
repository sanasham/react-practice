import { useState, useReducer } from "react";
import Todo from "../compoents/Todo";

export const ACTIONS = {
  ADD_TODO: "addTodo",
  DELETE_TODO: "deleteTodo",
  TOGGLE_TODO: "toggleToDO",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}
function UseReducer1() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };

  console.log("todos", todos);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          id=""
          style={{ padding: "20px" }}
        />
      </form>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default UseReducer1;
