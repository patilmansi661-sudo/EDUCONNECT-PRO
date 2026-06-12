import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/jobs">Jobs</Link> |{" "}
      <Link to="/groups">Groups</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;