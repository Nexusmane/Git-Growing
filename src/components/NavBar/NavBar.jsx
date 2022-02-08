import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

function NavBar({ user , setUser}) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <aside>
      <h2 className="site-title"> Git Growing </h2>
      <Link to="/plants/list">Plant List</Link>
      &nbsp; | &nbsp;
      <Link to="/plants/new">New Plant</Link>
      &nbsp; | &nbsp;
      <span> It's Plant Time ~ {user.name} </span>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </aside>
  )
}

export default NavBar;