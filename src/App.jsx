import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home as HomeIcon, 
  FolderKanban, 
  User, 
  BookOpen, 
  PlusCircle, 
  Menu, 
  X, 
  Sparkles,
  Recycle
} from "lucide-react";

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
        <div className="logo-badge">
          <Recycle className="logo-icon-svg" />
        </div>
        <div className="logo-text">
          <div className="logo-title-row">
            <strong>Saurabh Lubal</strong>
            <span className="logo-live-dot" title="Active Academic Portfolio"></span>
          </div>
          <span className="logo-sub">E-Waste & Sustainability Portfolio</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="nav-links desktop-only">
        <Link to="/" className={isActive("/") ? "active" : ""}>
          <HomeIcon size={16} /> Home
        </Link>

        <Link to="/portfolio" className={isActive("/portfolio") ? "active" : ""}>
          <FolderKanban size={16} /> Portfolio
        </Link>

        <Link to="/student" className={isActive("/student") ? "active" : ""}>
          <User size={16} /> Student
        </Link>

        <Link to="/about" className={isActive("/about") ? "active" : ""}>
          <BookOpen size={16} /> About
        </Link>

        <Link to="/portfolio" className="nav-cta-btn">
          <PlusCircle size={16} /> Submit Work
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav-drawer"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <Link to="/" onClick={closeMenu} className={isActive("/") ? "active" : ""}>
              <HomeIcon size={18} /> Home
            </Link>

            <Link to="/portfolio" onClick={closeMenu} className={isActive("/portfolio") ? "active" : ""}>
              <FolderKanban size={18} /> Portfolio & Activities
            </Link>

            <Link to="/student" onClick={closeMenu} className={isActive("/student") ? "active" : ""}>
              <User size={18} /> Student Profile
            </Link>

            <Link to="/about" onClick={closeMenu} className={isActive("/about") ? "active" : ""}>
              <BookOpen size={18} /> About Subject
            </Link>

            <Link to="/portfolio" onClick={closeMenu} className="mobile-cta-link">
              <PlusCircle size={18} /> Submit New Activity
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default function App() {
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