import { useCounter } from "./useCounter";

export const Counter = () => {
  const [state, fun] = useCounter(0, 2);
  return (
    <div>
      <h1>Counter : {state}</h1>
      {console.log(state)}
      <button onClick={fun}>Add</button>
    </div>
  );
};
