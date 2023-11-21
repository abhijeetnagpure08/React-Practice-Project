import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import UserPage from "../pages/UserPage";
import NotFound from "../pages/NotFound";
import PrivateRouter from "../context/PrivateRouter";
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/users"
        element={
          <PrivateRouter>
            <Users />
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/about"
        element={
          <PrivateRouter>
            <About />
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/contact"
        element={
          <PrivateRouter>
            <Contact />
          </PrivateRouter>
        }
      ></Route>
      <Route
        path="/users/:user_id"
        element={
          <PrivateRouter>
            <UserPage />
          </PrivateRouter>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
export default AllRoutes;
