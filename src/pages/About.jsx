import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="about-page">
      <section className="about-header">
        <span className="section-label">ACADEMIC FOUNDATION</span>
        <h1>
          E-Waste & <span>Sustainability.</span>
        </h1>
        <p>
          Examining the environmental footprint of digital technology, the global crisis of electronic waste, and the engineered solutions for sustainable product lifecycles.
        </p>
      </section>

      <motion.section
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="about-text" variants={itemVariants}>
          <span className="section-label">THE REAL COST OF HARDWARE</span>
          <h2>
            Modern computing carries an <span>environmental footprint.</span>
          </h2>
          <p>
            Millions of laptops, smartphones, displays, and servers are discarded each year as consumer demand for newer devices accelerates. Without regulated recycling, toxic heavy metals such as mercury, lead, and flame retardants leach into soil and aquifers.
          </p>
          <p>
            This course investigates the chemistry of e-waste, statutory waste management frameworks, and how future IT leaders can foster circular computing systems that treat retired electronics as valuable material reserves rather than disposable trash.
          </p>
        </motion.div>

        <motion.div className="environment-cards" variants={itemVariants}>
          <div className="environment-card">
            <span>♻</span>
            <h3>1. Reduce Generation</h3>
            <p>
              Prevent unnecessary device obsolescence through backwards compatibility and sustainable procurement policies.
            </p>
          </div>

          <div className="environment-card">
            <span>🔄</span>
            <h3>2. Prolong & Reuse</h3>
            <p>
              Repurpose older hardware, support community computer refurbishment drives, and advocate for modular repair standards.
            </p>
          </div>

          <div className="environment-card">
            <span>🌱</span>
            <h3>3. Certified Recycling</h3>
            <p>
              Channel discarded silicon through formal recovery plants where gold, copper, cobalt, and rare-earth elements are safely recaptured.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Scope of this Academic Portfolio */}
      <section className="subject-focus">
        <span className="section-label">PORTFOLIO REPOSITORY SCOPE</span>
        <h2>
          What You Will <span>Find Here</span>
        </h2>

        <div className="focus-grid">
          <div className="focus-card">
            <strong>01</strong>
            <h3>Research Assignments</h3>
            <p>
              Academic papers, critical analyses of e-waste statistics, government regulations, and reports exploring modern technological challenges.
            </p>
          </div>

          <div className="focus-card">
            <strong>02</strong>
            <h3>Educational Activities</h3>
            <p>
              Curated crosswords, conceptual diagrams, photographic documentation, and campus awareness initiatives.
            </p>
          </div>

          <div className="focus-card">
            <strong>03</strong>
            <h3>Presentations & Resources</h3>
            <p>
              Slide decks, open-source companion links, GitHub repositories, and interactive tools for tracking sustainability metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="portfolio-banner-cta" style={{ marginTop: "100px" }}>
        <div className="cta-content">
          <span className="cta-badge">EXPLORE WORK</span>
          <h2>Examine the academic documentation</h2>
          <p>
            Dive into the submissions repository to see assignments, activity reports, and educational media.
          </p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="explore-btn">
              Open Portfolio Activities →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}