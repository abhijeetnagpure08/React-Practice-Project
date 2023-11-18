import { useState } from "react";

const TodoInput = ({ handleAdd }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      handleAdd(value);
      setValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" disabled={!value}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
