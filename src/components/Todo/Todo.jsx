import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoElements from "./TodoElements";


const Todo = () => {
  const [todos, setTodos] = useState([]);
  
  function handleAdd(text) {
    const newData = {
      id: Date.now(),
      title: text,
      status: false,
    };
    const todoAfter = [...todos, newData];
    setTodos(todoAfter);
  }

  function handleToggle(id) {
    const toggle = todos.map((el, i) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    setTodos(toggle);
  }
  function handleDelete(id){
    const delFun = todos.filter((e,i)=>
        e.id!==id ? {...e} : ""
    );
    setTodos(delFun)
  }

  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      <div >
        {todos?.map((el, i) => {
            return (
              <div key={i}>
                <TodoElements {...el} handleToggle={handleToggle}  handleDelete={handleDelete}/>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Todo;
