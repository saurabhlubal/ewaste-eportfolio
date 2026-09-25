import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const [videoError, setVideoError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="home-page">
      {/* =========================================================
          HERO SECTION (Full-Screen Environmental Video)
      ========================================================= */}
      <section className="home-hero">
        <div className="hero-video-container">
          {!videoError && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="hero-background-video"
              onError={() => setVideoError(true)}
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-sun-shining-through-the-trees-of-a-lush-forest-41584-large.mp4"
                type="video/mp4"
              />
            </video>
          )}
          <div className="hero-video-overlay"></div>
        </div>

        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="eyebrow">
              🌱 E-WASTE & ENVIRONMENTAL SUSTAINABILITY PORTFOLIO
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Responsible Tech.
            <br />
            <span>Sustainable Future.</span>
          </motion.h1>

          <motion.h2 variants={itemVariants}>
            Academic portfolio by <strong>Saurabh Lubal</strong> exploring the intersection of modern Information Technology, electronic waste management, and green computing.
          </motion.h2>

          <motion.p variants={itemVariants}>
            Welcome to my curated academic e-portfolio. Here you can explore coursework assignments, environmental research papers, educational activities, and practical presentations documenting sustainable solutions for electronic waste.
          </motion.p>

          <motion.div className="student-tags" variants={itemVariants}>
            <span className="tag-pill">🎓 B.Tech IT</span>
            <span className="tag-pill">🆔 Roll No. 24101C0040</span>
            <span className="tag-pill">♻️ E-Waste Management</span>
            <span className="tag-pill">🌿 Green Computing</span>
          </motion.div>

          <motion.div className="hero-cta-group" variants={itemVariants}>
            <Link to="/portfolio" className="explore-btn">
              Explore Portfolio Work →
            </Link>
            <Link to="/about" className="learn-more-btn">
              About This Subject
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="circuit-circle"></div>

          <div className="recycle-ring">
            ♻
          </div>

          <div className="earth">
            🌍
          </div>

          <div className="leaf leaf-one">
            🌿
          </div>

          <div className="leaf leaf-two">
            🍃
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          IMPACT & CONTEXT STATS BAR
      ========================================================= */}
      <section className="stats-strip">
        <div className="stats-container">
          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="stat-number">62M+</span>
            <span className="stat-label">Metric Tons Global E-Waste Annual</span>
          </motion.div>

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="stat-number">&lt; 23%</span>
            <span className="stat-label">Documented Collection & Proper Recycling</span>
          </motion.div>

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="stat-number">3R Model</span>
            <span className="stat-label">Reduce • Reuse • Recycle Implementation</span>
          </motion.div>

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="stat-number">100%</span>
            <span className="stat-label">Student Coursework & Field Research</span>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          ABOUT THE PORTFOLIO SECTION
      ========================================================= */}
      <section className="home-feature-section">
        <div className="section-head text-center">
          <span className="section-label">COURSE OBJECTIVES</span>
          <h2>
            Bridging Technology with <span>Environmental Action</span>
          </h2>
          <p className="section-intro">
            As technology evolves at unprecedented speeds, consumer electronics create hazardous electronic waste. This academic portfolio documents our responsibility as future engineers to design, use, and recycle technology ethically.
          </p>
        </div>

        <div className="features-grid">
          <motion.div
            className="feature-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <div className="feature-icon">📄</div>
            <h3>Written Assignments & Reports</h3>
            <p>
              In-depth research into hazardous materials (lead, mercury, cadmium), formal e-waste processing channels, and government recycling directives.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <div className="feature-icon">🧩</div>
            <h3>Interactive Learning & Puzzles</h3>
            <p>
              Educational crosswords, quizzes, and classroom exercises created to simplify environmental sustainability terminology for students and peers.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <div className="feature-icon">💻</div>
            <h3>Online Tools & Open Repositories</h3>
            <p>
              Digital presentations, GitHub repositories, and interactive web tools demonstrating how software engineers can track and reduce environmental footprints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          THE 3R SUSTAINABILITY FRAMEWORK
      ========================================================= */}
      <section className="framework-section">
        <div className="framework-header">
          <span className="section-label">SUSTAINABILITY PRINCIPLES</span>
          <h2>
            The Core Framework for <span>Electronic Waste</span>
          </h2>
        </div>

        <div className="framework-cards">
          <div className="framework-card">
            <div className="framework-badge">01</div>
            <h3>Reduce Consumption</h3>
            <p>
              Avoid premature gadget upgrades. Optimize software for long-term hardware compatibility, minimizing the rate at which functional silicon enters the waste stream.
            </p>
          </div>

          <div className="framework-card">
            <div className="framework-badge">02</div>
            <h3>Repair & Reuse</h3>
            <p>
              Advocate for the Right to Repair, modular device design, refurbishing older computers for community access, and repurposing components.
            </p>
          </div>

          <div className="framework-card">
            <div className="framework-badge">03</div>
            <h3>Safe Certified Recycling</h3>
            <p>
              Ensure devices reach authorized e-waste dismantling facilities where precious metals (gold, copper, rare earths) are recovered without toxic toxic exposure.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTFOLIO CALL TO ACTION
      ========================================================= */}
      <section className="portfolio-banner-cta">
        <div className="cta-content">
          <span className="cta-badge">ACADEMIC SUBMISSIONS</span>
          <h2>Ready to explore my coursework & activities?</h2>
          <p>
            Browse submitted research reports, download crossword puzzles, view presentation slides, or submit a new academic activity.
          </p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="explore-btn">
              View All Activities →
            </Link>
            <Link to="/student" className="learn-more-btn">
              Meet the Student Behind This Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}