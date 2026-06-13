import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

function Jobs() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Mumbai"
    },
    {
      title: "Backend Developer",
      company: "Infosys",
      location: "Pune"
    },
    {
      title: "MERN Stack Intern",
      company: "Startup Hub",
      location: "Remote"
    },
    {
      title: "Software Engineer",
      company: "TCS",
      location: "Bangalore"
    },
    {
      title: "Full Stack Developer",
      company: "Wipro",
      location: "Hyderabad"
    },
    {
      title: "React Developer",
      company: "Accenture",
      location: "Remote"
    }
  ];

  return (
    <div className="container mt-5">
      <h1
        className="text-center mb-5"
        style={{
          color: "#0A66C2",
          fontWeight: "bold"
        }}
      >
        <FaBriefcase /> Career Opportunities
      </h1>

      <div className="row">
        {jobs.map((job, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card shadow-lg border-0 h-100"
              style={{
                borderRadius: "15px",
                transition: "0.3s"
              }}
            >
              <div className="card-body">
                <h4 className="card-title text-primary">
                  {job.title}
                </h4>

                <h6 className="text-secondary">
                  {job.company}
                </h6>

                <p className="text-muted">
                  <FaMapMarkerAlt /> {job.location}
                </p>

                <button
                  className="btn btn-primary w-100"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;