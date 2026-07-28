import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Student from "./pages/Student";
import About from "./pages/About";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>
        <span>♻</span>
        <strong>Saurabh Lubal</strong>
      </Link>


      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/portfolio" onClick={closeMenu}>
          Portfolio
        </Link>

        <Link to="/student" onClick={closeMenu}>
          Student
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

      </div>


      <button
        className={`menu-button ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/student"
          element={<Student />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;