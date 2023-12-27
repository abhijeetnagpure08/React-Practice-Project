import { forwardRef } from "react";
import "./otp.css"
const Pin = forwardRef(({ maxChar, forOnChange, forBackSpace }, ref) => {
  const handleKeyUp = (e) => {
    // console.log(e);
    if (e.keyCode === 8) {
      forBackSpace(e);
    } else {
      forOnChange(e);
    }
  };
  return (
    <input
      maxLength={maxChar}
      ref={ref}
      // onChange={forOnChange}
      onKeyUp={handleKeyUp}
    />
  );
});

export default Pin;
