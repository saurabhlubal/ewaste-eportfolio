import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Student from "./pages/Student";
import About from "./pages/About";
import WorkDetails from "./pages/WorkDetails";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <span>♻</span>
        <strong>Saurabh Lubal</strong>
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/portfolio">
          Portfolio
        </Link>

        <Link to="/student">
          Student
        </Link>

        <Link to="/about">
          About
        </Link>

      </div>

    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

     <Routes>

  <Route path="/" element={<Home />} />

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

  <Route
    path="/work/:id"
    element={<WorkDetails />}
  />

</Routes>

    </BrowserRouter>
  );
}

export default App;