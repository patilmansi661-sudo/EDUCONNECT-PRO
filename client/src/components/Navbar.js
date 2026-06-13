import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "#0A66C2",
        padding: "12px 30px"
      }}
    >
      <div className="container-fluid">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          EduConnect Pro
        </Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link text-white" to="/">
            Home
          </Link>

          <Link className="nav-link text-white" to="/jobs">
            Jobs
          </Link>

          <Link className="nav-link text-white" to="/groups">
            Groups
          </Link>

          <Link className="nav-link text-white" to="/profile">
            Profile
          </Link>

          <Link className="nav-link text-white" to="/login">
            Login
          </Link>

          <Link className="nav-link text-white" to="/register">
            Register
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;