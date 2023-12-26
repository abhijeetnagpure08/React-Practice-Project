import { forwardRef } from "react";

const Pin = forwardRef(({ maxChar, forOnChange }, ref) => {

  return (
    <input
      maxLength={maxChar}
      ref={ref}
      onChange={forOnChange}

    />
  );
});

export default Pin;
