function Dashboard() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Dashboard</h1>

      <div className="row mt-4">

        <div className="col-md-4">
          <div className="card shadow p-4">
            <h4>Connections</h4>
            <h2>120</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4">
            <h4>Posts</h4>
            <h2>35</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4">
            <h4>Profile Views</h4>
            <h2>540</h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;