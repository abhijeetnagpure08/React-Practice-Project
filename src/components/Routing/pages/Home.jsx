import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

function Home() {
  const { isAuth, logout } = useContext(AuthContext);
  return (
    <>
      <h1>Home Page</h1>
      <button disabled={!isAuth} onClick={logout}>
        LOGOUT
      </button>
    </>
  );
}

export default Home;
