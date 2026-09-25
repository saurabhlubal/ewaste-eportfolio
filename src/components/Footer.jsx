import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>♻</span> Saurabh Lubal
          </Link>
          <p className="footer-tagline">
            Academic E-Portfolio dedicated to E-Waste management, sustainable technology practices, and environmental stewardship.
          </p>
          <div className="footer-student-meta">
            <span>B.Tech Information Technology</span> • <span>Roll No. 24101C0040</span>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/student">Student Profile</Link>
          <Link to="/about">About Subject</Link>
        </div>

        <div className="footer-links-group">
          <h4>Key Topics</h4>
          <span>E-Waste Lifecycle</span>
          <span>Responsible Recycling</span>
          <span>Green Computing</span>
          <span>Circular Electronics</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Saurabh Lubal. Built for Academic & Environmental Studies.</p>
        <p className="footer-eco-badge">🌱 Committed to Responsible Technology</p>
      </div>
    </footer>
  );
}
