function Notifications() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Notifications</h1>

      <div className="alert alert-info mt-4">
        New connection request received.
      </div>

      <div className="alert alert-success">
        Your profile was viewed 20 times today.
      </div>

      <div className="alert alert-warning">
        New job opportunity available.
      </div>
    </div>
  );
}

export default Notifications;