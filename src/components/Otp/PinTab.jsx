import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import "../styles.css";
import Pin from "./Pin";
const PinTab = ({ length, maxChar, setOtp }) => {
  const [pinTabLength] = useState(new Array(length).fill(""));
  const [pinTabValue] = useState(new Array(length).fill(""));

  const inputRef = useRef([]);

  const changeHandler = (e, index) => {
    pinTabValue[index] = e.target.value;

    if (index < length - 1 && e.target.value.length === maxChar) {
      inputRef.current[index + 1].focus();
    }
    setOtp(pinTabValue.join(""));
  };
  const forBackSpace = (e, index) => {
    pinTabValue[index] = e.target.value;

    if (index > 0 && e.target.value.length === 0) {
      inputRef.current[index - 1].focus();
    }
    setOtp(pinTabValue.join(""));
  };

  const handlePaste = (e) => {
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((e, index) => index < maxChar * length);
    let values = [];
    for (let i = 0; i < maxChar * length; i += maxChar) {
      let temp = "";
      for (let j = i; j < maxChar + i; j++) {
        if (data[j] === undefined) {
          temp += " ";
        } else {
          temp += data[j];
        }
      }
      values.push(temp);
    }
    console.log(data);
    console.log(values);
    values.forEach((character, index) => {
      pinTabValue[index] = character;
      inputRef.current[index].value = character;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
    // console.log(data);
    setOtp(pinTabValue.join(""));
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  return (
    <div onPaste={handlePaste}>
      {pinTabLength.map((item, index) => {
        return (
          <Pin
            key={index}
            maxChar={maxChar}
            ref={(elem) => {
              inputRef.current[index] = elem;
            }}
            forOnChange={(e) => changeHandler(e, index)}
            forBackSpace={(e) => forBackSpace(e, index)}
          />
          // <input
          //   key={index}
          //   maxLength={maxChar}
          //   ref={(elem) => {
          //     inputRef.current[index] = elem;
          //   }}
          //   onChange={(e) => changeHandler(e, index)}
          // />
        );
      })}
    </div>
  );
};

PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number,
};

export default PinTab;
