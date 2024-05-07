import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="main-page" style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      <div className="welcome-section" style={{ textAlign: "center", margin: "0 auto", maxWidth: "800px" }}>
        <div className="welcome-text">
          <h1 style={{ color: "#333", fontSize: "2em" }}>Welcome to JIS!</h1>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            JIS is your comprehensive platform for court case management and legal information. Designed for judges, lawyers, and legal professionals, our system is efficient and effective.
          </p>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Manage cases, track resolutions, schedule hearings, and access case details with ease. Our user-friendly interface ensures smooth navigation.
          </p>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Discover features like quick access to cases, search functionalities, and robust user account management. Stay informed with our intuitive dashboard.
          </p>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Thank you for choosing JIS. We're committed to providing a seamless experience and the tools you need to succeed.
          </p>
          <div className="button-group" style={{ marginTop: "20px" }}>
            <Link to="/login" className="btn btn-primary" style={{ marginRight: "10px", padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", textDecoration: "none" }}>
              Get Started
            </Link>
            <Link to="/about" className="btn btn-secondary" style={{ padding: "10px 20px", backgroundColor: "#6c757d", color: "#fff", textDecoration: "none" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;