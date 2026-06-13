import {
  FaUsers,
  FaBriefcase,
  FaUserGraduate
} from "react-icons/fa";

function Home() {
  return (
    <>

      {/* Hero Section */}

      <div
        className="text-center text-white p-5 mb-4"
        style={{
          background:
            "linear-gradient(135deg,#0A66C2,#004182)"
        }}
      >
        <h1 className="display-4 fw-bold">
          Welcome to EduConnect Pro
        </h1>

        <p className="lead">
          Connect Students, Alumni and Recruiters
        </p>

      </div>

      {/* Statistics Section */}

      <div className="container mb-5">

        <div className="row">

          <div className="col-md-4 mb-3">

            <div className="card stats-card shadow">

              <div className="card-body text-center">

                <FaUsers
                  size={50}
                  className="mb-3 text-primary"
                />

                <h2>500+</h2>

                <p>Students</p>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-3">

            <div className="card stats-card shadow">

              <div className="card-body text-center">

                <FaBriefcase
                  size={50}
                  className="mb-3 text-success"
                />

                <h2>100+</h2>

                <p>Jobs</p>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-3">

            <div className="card stats-card shadow">

              <div className="card-body text-center">

                <FaUserGraduate
                  size={50}
                  className="mb-3 text-warning"
                />

                <h2>50+</h2>

                <p>Alumni</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* LinkedIn Style Layout */}

      <div className="container">

        <div className="row">

          {/* Left Profile Section */}

          <div className="col-md-3 mb-3">

            <div className="card shadow">

              <div className="card-body text-center">

                <img
                  src="https://via.placeholder.com/120"
                  alt="profile"
                  className="rounded-circle mb-3"
                />

                <h4>Student Name</h4>

                <p className="text-muted">
                  Computer Engineering
                </p>

                <hr />

                <p>
                  Connections: 120
                </p>

                <p>
                  Profile Views: 340
                </p>

              </div>

            </div>

          </div>

          {/* Middle Feed */}

          <div className="col-md-6 mb-3">

            <div className="card shadow mb-3">

              <div className="card-body">

                <h4>Create Post</h4>

                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Share something..."
                ></textarea>

                <button className="btn btn-primary mt-3">
                  Post
                </button>

              </div>

            </div>

            <div className="card shadow mb-3">

              <div className="card-body">

                <h5>Recent Posts</h5>

                <hr />

                <h6>John Doe</h6>

                <p>
                  Excited to join a new internship
                  opportunity!
                </p>

              </div>

            </div>

            <div className="card shadow mb-3">

              <div className="card-body">

                <h6>Jane Smith</h6>

                <p>
                  Looking for MERN Stack project
                  collaborators.
                </p>

              </div>

            </div>

          </div>

          {/* Right Sidebar */}

          <div className="col-md-3 mb-3">

            <div className="card shadow mb-3">

              <div className="card-body">

                <h4>Latest Jobs</h4>

                <hr />

                <p>
                  Frontend Developer
                </p>

                <p>
                  Backend Developer
                </p>

                <p>
                  MERN Stack Intern
                </p>

              </div>

            </div>

            <div className="card shadow">

              <div className="card-body">

                <h4>Groups</h4>

                <hr />

                <p>
                  Web Development
                </p>

                <p>
                  AI & ML
                </p>

                <p>
                  Cyber Security
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Home;