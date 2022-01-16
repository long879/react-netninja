import { Link } from "react-router-dom";

// có lỗi nếu khi click nhanh vào "Home" và vào "New Blog"

function Navbar() {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
