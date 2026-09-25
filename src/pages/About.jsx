import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  BookOpen
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
          initial={{ opacity: 0, y: 15 }}
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
          viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: 0.15 }}
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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: 0.3 }}
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