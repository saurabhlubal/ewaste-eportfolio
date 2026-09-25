import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Student from "./pages/Student";
import About from "./pages/About";
import Assignment from "./pages/Assignment";
import Footer from "./components/Footer";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-icon">♻</span>
        <div className="logo-text">
          <strong>Saurabh Lubal</strong>
          <span className="logo-sub">E-Waste & Sustainability</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="nav-links desktop-only">
        <Link to="/" className={isActive("/") ? "active" : ""}>
          Home
        </Link>

        <Link to="/portfolio" className={isActive("/portfolio") ? "active" : ""}>
          Portfolio
        </Link>

        <Link to="/student" className={isActive("/student") ? "active" : ""}>
          Student
        </Link>

        <Link to="/about" className={isActive("/about") ? "active" : ""}>
          About
        </Link>

        <Link to="/portfolio" className="nav-cta-btn">
          + Submit Work
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        className={`menu-button ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav-drawer"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" onClick={closeMenu} className={isActive("/") ? "active" : ""}>
              <span>🏡</span> Home
            </Link>

            <Link to="/portfolio" onClick={closeMenu} className={isActive("/portfolio") ? "active" : ""}>
              <span>📚</span> Portfolio & Activities
            </Link>

            <Link to="/student" onClick={closeMenu} className={isActive("/student") ? "active" : ""}>
              <span>👤</span> Student Profile
            </Link>

            <Link to="/about" onClick={closeMenu} className={isActive("/about") ? "active" : ""}>
              <span>🌿</span> About Subject
            </Link>

            <Link to="/portfolio" onClick={closeMenu} className="mobile-cta-link">
              + Submit New Activity
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />

        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/student" element={<Student />} />
            <Route path="/about" element={<About />} />
            <Route path="/assignment/:id" element={<Assignment />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;