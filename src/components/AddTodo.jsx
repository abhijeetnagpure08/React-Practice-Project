import { useState } from "react";

const AddTodo = ({ handleAdd }) => {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    handleAdd(text);
  }

  return (
    <div style={{marginBottom : "50px",marginTop:"100px"}}>
      <input value={text} onChange={handleChange} />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};
export default AddTodo;
