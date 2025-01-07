import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <span className="font-bold ml-2">Task</span> Master
      </div>
      <Link to="/">Tasks</Link>
      <Link to="/user">User</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
