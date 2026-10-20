import { Link } from "react-router-dom";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

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

          <div className="footer-social-links">
            <a
              href="https://github.com/saurabhlubal"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Saurabh Lubal's GitHub Profile (opens in new tab)"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/saurabhlubal"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Saurabh Lubal's LinkedIn Profile (opens in new tab)"
              title="LinkedIn Profile - Connect with Saurabh Lubal"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
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
          <span className="footer-attribution-text">
            Media: Open Archive & Wikimedia Commons (CC-BY 3.0 / World Economic Forum)
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Saurabh Lubal. Built for Academic & Environmental Studies.</p>
        <p className="footer-eco-badge">🌱 Committed to Responsible Technology</p>
      </div>
    </footer>
  );
}
