import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

function NavBar({ user , setUser}) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <aside>
      <Link to="/plants/home" className="site-title"> Git Growing </Link>
      <Link to="/plants/list" className="nav-link">Plant List</Link>
      <Link to="/plants/new" className="nav-link">New Plant</Link>
      <span> It's Plant Time ~ {user.name} </span>
      <Link onClick={handleLogOut} className="nav-link" to="">Log Out</Link>
    </aside>
  )
}

export default NavBar;