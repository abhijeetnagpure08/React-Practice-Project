import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import "./Navbar.css";
const links = [
  { path: "/", title: "HOME" },
  { path: "/about", title: "ABOUT" },
  { path: "/contact", title: "CONTACT" },
  { path: "/login", title: "LOGIN" },
  { path: "/users", title: "USERS" }
];
function Navbar() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="cont">
      {links?.map((links) => (
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? { color: "red" }
              : { textDecoration: "none", color: "teal" };
          }}
          key={links.path}
          to={links.path}
        >
          {links.title}
        </NavLink>
        // <Link key={links.path} to={links.path}>
        //   {links.title}
        // </Link>
      ))}
      <p className="user">
        IS USER AUTHENTICATED : {isAuth ? "YES" : "NO"}
      </p>
    </div>
  );
}
export default Navbar;
{
  /* <Link to="/">HOME</Link>
<Link to="/about">ABOUT</Link>
<Link to="/contact">CONTACT</Link>
<Link to="/login">LOGIN</Link>
<Link to="/users">USERS</Link>  */
}
