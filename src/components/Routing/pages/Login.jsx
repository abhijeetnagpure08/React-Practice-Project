import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

function Login() {
  const { isAuth, login } = useContext(AuthContext);
  return (
    <>
      <h1>Login Page</h1>
      <button disabled={isAuth} onClick={login}>
        LOGIN
      </button>
    </>
  );
}

export default Login;
