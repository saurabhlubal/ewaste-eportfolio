import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Recycle,
  Cpu,
  BatteryCharging,
  Monitor,
  AlertTriangle,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  FileText,
  CheckCircle2,
  Globe,
  Layers,
  BookOpen,
  GraduationCap,
  Code2,
  Leaf,
  ExternalLink
} from "lucide-react";

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function About() {
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="about-page">
      {/* =========================================================
          ABOUT HEADER
      ========================================================= */}
      <section className="about-header">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">ACADEMIC FOUNDATION & SCIENTIFIC INQUIRY</span>
          <h1>
            E-Waste & <span className="gradient-text">Sustainable Tech.</span>
          </h1>
          <p>
            Investigating the accelerating crisis of electronic waste, toxic material degradation in landfills, statutory Extended Producer Responsibility (EPR), and engineered circular lifecycles for next-generation hardware.
          </p>
        </motion.div>
      </section>

      {/* =========================================================
          RESEARCHER & AUTHOR PERSONAL PROFILE (MOTION.DEV INSPIRED)
      ========================================================= */}
      <section className="about-author-section">
        <motion.div
          className="author-profile-card"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Column: Portrait & Visual Badge */}
          <div className="author-portrait-column">
            <div className="author-image-wrapper">
              <img
                src="/images/saurabh-lubal.jpg"
                alt="Saurabh Lubal - Author & Researcher"
                className="author-portrait-img"
                loading="eager"
              />
              <div className="author-image-overlay"></div>
              <div className="author-image-badge">
                <span className="badge-live-pulse"></span>
                <span>B.Tech IT • Roll No. 24101C0040</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Interests & Social Links */}
          <div className="author-content-column">
            <div className="author-eyebrow">
              <span className="eyebrow-chip">PORTFOLIO AUTHOR & RESEARCHER</span>
            </div>

            <h2 className="author-name">Saurabh Lubal</h2>

            <div className="author-credentials">
              <span className="cred-item">
                <GraduationCap size={16} className="icon-emerald" /> B.Tech in Information Technology
              </span>
              <span className="cred-dot">•</span>
              <span className="cred-item">
                <Code2 size={16} className="icon-emerald" /> Software & Systems
              </span>
              <span className="cred-dot">•</span>
              <span className="cred-item">
                <Leaf size={16} className="icon-emerald" /> Green Computing
              </span>
            </div>

            <div className="author-bio">
              <p>
                I am a Bachelor of Technology student specializing in Information Technology. My core academic and technical interests center around <strong>software development, modern systems engineering, and environmental sustainability</strong>.
              </p>
              <p>
                As consumer demand for cutting-edge computing hardware accelerates, discarded electronics have become the fastest-growing waste stream on earth. Through this academic e-portfolio, I investigate statutory electronic waste frameworks, hazardous materials recovery, and how engineers can advocate for circular lifecycles and sustainable computing.
              </p>
            </div>

            {/* Interest Pills */}
            <div className="author-interests-group">
              <span className="interest-pill">
                <Code2 size={14} className="icon-emerald" /> Software Development
              </span>
              <span className="interest-pill">
                <Cpu size={14} className="icon-emerald" /> Hardware Architecture
              </span>
              <span className="interest-pill">
                <Recycle size={14} className="icon-emerald" /> Circular Electronics
              </span>
              <span className="interest-pill">
                <Leaf size={14} className="icon-emerald" /> Environmental Stewardship
              </span>
            </div>

            {/* Social Links Row */}
            <div className="author-social-row">
              <a
                href="https://github.com/saurabhlubal"
                target="_blank"
                rel="noopener noreferrer"
                className="author-social-btn github"
                aria-label="Saurabh Lubal's GitHub Profile (opens in new tab)"
              >
                <GithubIcon size={18} />
                <span>github.com/saurabhlubal</span>
                <ExternalLink size={13} className="ext-icon" />
              </a>

              <a
                href="https://linkedin.com/in/saurabhlubal"
                target="_blank"
                rel="noopener noreferrer"
                className="author-social-btn linkedin"
                aria-label="Saurabh Lubal's LinkedIn Profile (opens in new tab)"
                title="LinkedIn Profile - Connect with Saurabh Lubal"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn Profile</span>
                <ExternalLink size={13} className="ext-icon" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          THE ANATOMY OF E-WASTE (DETAILED MATERIAL BREAKDOWN)
      ========================================================= */}
      <section className="about-materials-section">
        <div className="section-head text-center">
          <span className="section-label">MATERIAL ANALYSIS</span>
          <h2>The Anatomy of Discarded Electronics</h2>
          <p className="section-intro">
            Consumer hardware contains both immensely valuable precious elements and dangerous bio-accumulative toxins. Understanding their chemical composition is essential for circular engineering.
          </p>
        </div>

        <motion.div
          className="materials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Card 1: Printed Circuit Boards */}
          <motion.div className="material-card" variants={itemVariants} whileHover={{ y: -6 }}>
            <div className="material-icon-box pcb">
              <Cpu size={32} />
            </div>
            <div className="material-badge">CORE ELECTRONICS</div>
            <h3>Printed Circuit Boards (PCBs)</h3>
            <p>
              High-density motherboards and microchips represent the highest concentration of recoverable gold, silver, and palladium on earth.
            </p>
            <div className="material-element-list">
              <div className="element-tag value">
                <strong>Recoverable:</strong> Gold (Au), Copper (Cu), Tantalum (Ta)
              </div>
              <div className="element-tag toxic">
                <strong>Hazard:</strong> Brominated flame retardants & Lead solder
              </div>
            </div>
          </motion.div>

          {/* Card 2: Batteries & Power Systems */}
          <motion.div className="material-card" variants={itemVariants} whileHover={{ y: -6 }}>
            <div className="material-icon-box battery">
              <BatteryCharging size={32} />
            </div>
            <div className="material-badge">STORAGE CELLS</div>
            <h3>Lithium-Ion & Cobalt Batteries</h3>
            <p>
              Power cells in portable laptops, phones, and peripherals pose acute fire hazards and contaminate aquifers if crushed in standard municipal compactors.
            </p>
            <div className="material-element-list">
              <div className="element-tag value">
                <strong>Recoverable:</strong> Cobalt (Co), Lithium (Li), Nickel (Ni)
              </div>
              <div className="element-tag toxic">
                <strong>Hazard:</strong> Hydrofluoric acid leaks & Thermal runaway
              </div>
            </div>
          </motion.div>

          {/* Card 3: Displays & Optoelectronics */}
          <motion.div className="material-card" variants={itemVariants} whileHover={{ y: -6 }}>
            <div className="material-icon-box display">
              <Monitor size={32} />
            </div>
            <div className="material-badge">DISPLAY UNITS</div>
            <h3>Monitors, OLEDs & Cathode Rays</h3>
            <p>
              Liquid crystal displays, OLED panels, and legacy CRT monitors contain specialized rare-earth phosphor coatings and hazardous backlights.
            </p>
            <div className="material-element-list">
              <div className="element-tag value">
                <strong>Recoverable:</strong> Indium tin oxide (ITO), Optical glass
              </div>
              <div className="element-tag toxic">
                <strong>Hazard:</strong> Mercury fluorescent vapor & Cadmium sulfide
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          THE 3R SUSTAINABILITY STRATEGY
      ========================================================= */}
      <section className="about-strategy-section">
        <div className="section-head text-center">
          <span className="section-label">ACTION PROTOCOL</span>
          <h2>The 3R Circular Framework</h2>
          <p className="section-intro">
            A hierarchical approach to electronic stewardship that prioritizes source prevention before downcycling.
          </p>
        </div>

        <div className="strategy-grid">
          <motion.div
            className="strategy-card"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
          >
            <div className="strategy-number">01</div>
            <div className="strategy-header">
              <div className="strategy-icon-box">
                <RotateCcw size={24} />
              </div>
              <h3>1. Reduce Generation</h3>
            </div>
            <p>
              Prevent unnecessary device obsolescence through backwards-compatible software design, modular hardware architectures, and statutory Right to Repair legislation.
            </p>
            <ul className="strategy-bullets">
              <li><CheckCircle2 size={15} /> Open diagnostics and firmware standards</li>
              <li><CheckCircle2 size={15} /> Durable, screw-assembled enclosures</li>
              <li><CheckCircle2 size={15} /> Extended corporate hardware lifecycles</li>
            </ul>
          </motion.div>

          <motion.div
            className="strategy-card"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.15 }}
          >
            <div className="strategy-number">02</div>
            <div className="strategy-header">
              <div className="strategy-icon-box">
                <Layers size={24} />
              </div>
              <h3>2. Prolong & Reuse</h3>
            </div>
            <p>
              Repurpose functional computing equipment, support student and community computer refurbishment drives, and upgrade RAM/storage rather than retiring whole machines.
            </p>
            <ul className="strategy-bullets">
              <li><CheckCircle2 size={15} /> Linux conversion for older PC labs</li>
              <li><CheckCircle2 size={15} /> Component harvesting for spare parts</li>
              <li><CheckCircle2 size={15} /> Secondary market re-certification</li>
            </ul>
          </motion.div>

          <motion.div
            className="strategy-card"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.3 }}
          >
            <div className="strategy-number">03</div>
            <div className="strategy-header">
              <div className="strategy-icon-box">
                <Recycle size={24} />
              </div>
              <h3>3. Certified Recycling</h3>
            </div>
            <p>
              Channel discarded silicon through formal recovery plants where automated shredding, magnetic separation, and hydrometallurgy capture pure gold, copper, and cobalt without toxic emissions.
            </p>
            <ul className="strategy-bullets">
              <li><CheckCircle2 size={15} /> Zero landfill and zero incineration policy</li>
              <li><CheckCircle2 size={15} /> Urban mining for clean precious metal yield</li>
              <li><CheckCircle2 size={15} /> Formal R2 / e-Stewards certified recyclers</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          REPOSITORY SCOPE
      ========================================================= */}
      <section className="subject-focus">
        <div className="section-head text-center">
          <span className="section-label">PORTFOLIO DOCUMENTATION</span>
          <h2>What You Will Find in This Archive</h2>
          <p className="section-intro">
            A comprehensive academic dossier containing real-time course submissions, interactive learning tools, and digital research companions.
          </p>
        </div>

        <div className="focus-grid">
          <div className="focus-card">
            <div className="focus-card-top">
              <strong className="focus-number">01</strong>
              <div className="focus-icon-pill">
                <FileText size={18} /> Research
              </div>
            </div>
            <h3>Coursework Assignments</h3>
            <p>
              Peer-reviewed analyses of global e-waste statistics, statutory policies like Extended Producer Responsibility (EPR), and technical evaluations of clean recycling chemistries.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-card-top">
              <strong className="focus-number">02</strong>
              <div className="focus-icon-pill">
                <Sparkles size={18} /> Interactive
              </div>
            </div>
            <h3>Educational Activities</h3>
            <p>
              Curated environmental crossword puzzles, classroom activities, hardware teardown photo documentation, and interactive awareness materials.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-card-top">
              <strong className="focus-number">03</strong>
              <div className="focus-icon-pill">
                <Globe size={18} /> Open Source
              </div>
            </div>
            <h3>Digital Tools & Resources</h3>
            <p>
              Companion slide presentations, open GitHub repositories, YouTube documentary case studies, and live digital projects tracking sustainability metrics.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTFOLIO BANNER CALL TO ACTION
      ========================================================= */}
      <section className="portfolio-banner-cta" style={{ marginTop: "80px" }}>
        <div className="cta-content">
          <span className="cta-badge">
            <BookOpen size={14} /> EXPLORE THE SUBMISSIONS
          </span>
          <h2>Examine the academic documentation</h2>
          <p>
            Dive into the submissions repository to see laboratory assignments, activity reports, and educational media stored directly in the cloud.
          </p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="explore-btn">
              Open Portfolio Activities <ArrowRight size={18} />
            </Link>
            <Link to="/student" className="learn-more-btn">
              View Student Dossier
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}