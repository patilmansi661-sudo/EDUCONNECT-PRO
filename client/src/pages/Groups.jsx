function Groups() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Professional Groups</h1>

      <div className="card shadow p-4 mt-4">
        <h3>MERN Developers</h3>
        <p>Connect with MERN Stack Developers.</p>
        <button className="btn btn-primary">
          Join Group
        </button>
      </div>

      <div className="card shadow p-4 mt-4">
        <h3>Cyber Security Community</h3>
        <p>Learn ethical hacking and security.</p>
        <button className="btn btn-primary">
          Join Group
        </button>
      </div>
    </div>
  );
}

export default Groups;