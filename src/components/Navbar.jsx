import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

function Navbar() {
  const { favourites } = useStudents();

  return (
    <nav className="navbar">
      <div className="nav-brand">Favourite Student List</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Student List
        </Link>
        <Link to="/favourites" className="nav-link">
          Favourite Students ({favourites.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;