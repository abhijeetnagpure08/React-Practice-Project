import { useReducer, useState } from "react";
import "./Form.css";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    default:
      return state;
  }
};

const initialState = {
  email: "",
  password: "",
};

export const Form = () => {
  const [data, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <div className="box">
          <label htmlFor="">Email</label> <br />
          <input
            className="input-box"
            type="text"
            value={data.email}
            onChange={(e) => {
              dispatch({ type: "EMAIL", payload: e.target.value });
            }}
          />
        </div>
        <div className="box">
          <label htmlFor="">Password</label>
          <br />
          <input
            className="input-box"
            type="password"
            value={data.password}
            onChange={(e) => {
              dispatch({ type: "PASSWORD", payload: e.target.value });
            }}
          />
        </div>
        <button type="submit">Submit</button>
        <br />
        <br />
        {show === true ? (
          <div className="para">
            <p>Your Email Id is : {data.email}</p>
            <p>Your Password is : {data.password}</p>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
