import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { 
  ArrowRight, 
  Recycle, 
  Leaf, 
  Cpu, 
  ShieldCheck, 
  FileText, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  RotateCw,
  FolderOpen
} from "lucide-react";

export default function Home() {
  const [videoError, setVideoError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="home-page">
      {/* =========================================================
          CINEMATIC HERO SECTION (MOTION.DEV INSPIRED)
      ========================================================= */}
      <section className="home-hero">
        {/* Subtle Ambient Video Background */}
        <div className="hero-video-container" aria-hidden="true">
          {!videoError && !shouldReduceMotion ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/nature-poster.jpg"
              className="hero-background-video"
              onError={() => setVideoError(true)}
            >
              <source src="/videos/nature-background.webm" type="video/webm" />
              <source src="/videos/ewaste-background.mp4" type="video/mp4" />
            </video>
          ) : (
            <div
              className="hero-background-fallback"
              style={{ backgroundImage: `url('/images/nature-poster.jpg')` }}
            />
          )}
          <div className="hero-video-overlay"></div>
          <div className="hero-mesh-glow"></div>
        </div>

        {/* Hero Left Content */}
        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="eyebrow">
              <span className="eyebrow-dot"></span>
              2026 ACADEMIC E-PORTFOLIO • E-WASTE & SUSTAINABILITY
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Responsible Tech.
            <br />
            <span className="gradient-text">Circular Future.</span>
          </motion.h1>

          <motion.h2 variants={itemVariants}>
            Academic portfolio by <strong>Saurabh Lubal</strong> (B.Tech IT, Roll No. 24101C0040) investigating electronic waste lifecycles, sustainable hardware engineering, and circular computing systems.
          </motion.h2>

          <motion.p variants={itemVariants}>
            Documenting student coursework, interactive environmental crossword puzzles, research reports, and digital resources to promote responsible electronic consumption and recycling.
          </motion.p>

          <motion.div className="student-tags" variants={itemVariants}>
            <span className="tag-pill">
              <Cpu size={14} className="tag-icon" /> B.Tech IT
            </span>
            <span className="tag-pill">
              <Recycle size={14} className="tag-icon" /> E-Waste Lifecycle
            </span>
            <span className="tag-pill">
              <Leaf size={14} className="tag-icon" /> Green Computing
            </span>
          </motion.div>

          <motion.div className="hero-cta-group" variants={itemVariants}>
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link to="/portfolio" className="explore-btn">
                Explore Portfolio Work <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link to="/about" className="learn-more-btn">
                About the Author & Research
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hero Right Visual: Glassmorphic Eco-Hub Showcase */}
        <motion.div
          className="home-visual-container"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Floating Glass Hub */}
          <motion.div 
            className="eco-hub-card"
            animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="hub-header">
              <div className="hub-status-pill">
                <span className="hub-pulse-dot"></span> Circular Framework
              </div>
              <span className="hub-code">IT-ENV-2026</span>
            </div>

            <div className="hub-center-visual">
              <div className="hub-circle-outer">
                <div className="hub-circle-inner">
                  <Recycle size={46} className="hub-eco-icon" />
                  <span className="hub-percent">100%</span>
                  <span className="hub-sublabel">Student Focus</span>
                </div>
              </div>
            </div>

            <div className="hub-metrics-row">
              <div className="hub-metric-tile">
                <span className="hub-tile-val">3R</span>
                <span className="hub-tile-lbl">Reduce • Reuse • Recycle</span>
              </div>
              <div className="hub-metric-tile">
                <span className="hub-tile-val">0%</span>
                <span className="hub-tile-lbl">Toxic Landfill Goal</span>
              </div>
            </div>

            {/* Floating Mini Chips */}
            <motion.div 
              className="floating-chip chip-one"
              animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            >
              <Leaf size={14} className="chip-icon" />
              <span>Right to Repair</span>
            </motion.div>

            <motion.div 
              className="floating-chip chip-two"
              animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <ShieldCheck size={14} className="chip-icon" />
              <span>Certified Recycling</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          IMPACT STATS TICKER BAR
      ========================================================= */}
      <section className="stats-strip">
        <div className="stats-container">
          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
          >
            <span className="stat-number">62M+</span>
            <span className="stat-label">Metric Tons Global E-Waste Annual</span>
          </motion.div>

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <span className="stat-number">&lt; 23%</span>
            <span className="stat-label">Documented Formal Recycling Rate</span>
          </motion.div>

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <span className="stat-number">3R Model</span>
            <span className="stat-label">Practical Campus Action Protocol</span>
          </motion.div>

          <motion.div
            className="stat-box"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.3 }}
          >
            <span className="stat-number">100%</span>
            <span className="stat-label">Open Academic Documentation</span>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          LINEAR CRISIS VS CIRCULAR SOLUTION
      ========================================================= */}
      <section className="contrast-section">
        <div className="section-head text-center">
          <span className="section-label">THE TECHNOLOGICAL PARADOX</span>
          <h2>
            From Linear Consumption to <span>Circular Stewardship</span>
          </h2>
          <p className="section-intro">
            Traditional electronics manufacturing follows a destructive "Take-Make-Waste" curve. As software and hardware engineers, our imperative is designing systems that preserve resources and eliminate landfill contamination.
          </p>
        </div>

        <div className="contrast-grid">
          {/* Card 1: Linear Challenge */}
          <motion.div
            className="contrast-card challenge"
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card-badge challenge">
              <AlertTriangle size={15} /> The Linear Challenge
            </div>
            <h3>Toxic Accumulation & Obsolescence</h3>
            <ul className="contrast-list">
              <li>
                <strong>Heavy Metal Leach:</strong> Discarded PCBs contain lead, mercury, and cadmium that pollute groundwater.
              </li>
              <li>
                <strong>Planned Obsolescence:</strong> Proprietary firmware and glued components prevent repairs and hasten replacements.
              </li>
              <li>
                <strong>Precious Resource Loss:</strong> Gold, copper, and rare-earth neodymium are discarded instead of reclaimed.
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Circular Solution */}
          <motion.div
            className="contrast-card solution"
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card-badge solution">
              <CheckCircle2 size={15} /> The Circular Solution
            </div>
            <h3>Refurbishment, Modularity & Recovery</h3>
            <ul className="contrast-list">
              <li>
                <strong>Hardware Longevity:</strong> Modular components designed for multi-year upgrades and easy teardown.
              </li>
              <li>
                <strong>Urban Mining:</strong> Recovering 95%+ of pure precious metals from decommissioned hardware systems.
              </li>
              <li>
                <strong>Green Software Standards:</strong> Optimizing code efficiency to run smoothly on legacy devices.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          ACADEMIC REPOSITORY HIGHLIGHTS
      ========================================================= */}
      <section className="home-feature-section">
        <div className="section-head text-center">
          <span className="section-label">PORTFOLIO DOMAINS</span>
          <h2>
            What You Can Explore in <span>This Portfolio</span>
          </h2>
          <p className="section-intro">
            A dynamic academic repository containing verified assignments, interactive tools, and environmental coursework submissions.
          </p>
        </div>

        <div className="features-grid">
          <motion.div
            className="feature-card"
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="feature-icon-wrapper">
              <FileText size={26} className="feature-icon-svg" />
            </div>
            <h3>Coursework Assignments</h3>
            <p>
              Formal academic assignments analyzing hazardous chemical impacts, government statutory policies, and responsible electronic lifecycle frameworks.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="feature-icon-wrapper">
              <RotateCw size={26} className="feature-icon-svg" />
            </div>
            <h3>Interactive Learning</h3>
            <p>
              Educational crossword puzzles, quizzes, and classroom activities designed to make complex environmental chemistry approachable and memorable.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={shouldReduceMotion ? {} : { y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="feature-icon-wrapper">
              <Globe size={26} className="feature-icon-svg" />
            </div>
            <h3>Open Web Resources</h3>
            <p>
              GitHub source repositories, companion slide decks, YouTube case studies, and live digital projects documenting sustainable computing tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BANNER CALL TO ACTION
      ========================================================= */}
      <section className="portfolio-banner-cta">
        <div className="cta-content">
          <span className="cta-badge">
            <Sparkles size={14} /> LIVE ACADEMIC SUBMISSION SYSTEM
          </span>
          <h2>Explore or Submit Coursework Activities</h2>
          <p>
            Experience our dynamic submission system. View PDF documents, open online GitHub repositories, or add a new academic activity with real-time database storage.
          </p>
          <div className="cta-buttons">
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link to="/portfolio" className="explore-btn">
                Open Portfolio Repository <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link to="/student" className="learn-more-btn">
                View Student Dossier
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}