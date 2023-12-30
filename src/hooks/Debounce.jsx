import { useDebounce } from "./useDebounce";

export const Debounce = () => {
  const handleClick = () => {
    console.log("Network Request Failed");
  };
  const debounce = useDebounce(handleClick, 3000);
  return (
    <div>
      <button onClick={debounce}>Click Me</button>
    </div>
  );
};
