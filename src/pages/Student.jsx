import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Student() {
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
    <main className="student-page">
      <section className="student-header">
        <span className="section-label">STUDENT DOSSIER</span>
        <h1>
          Academic <span>Profile.</span>
        </h1>
        <p>
          Information Technology student focusing on the intersection of computing infrastructure, electronic waste lifecycle analysis, and sustainable software systems.
        </p>
      </section>

      <motion.section
        className="student-profile"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="profile-visual" variants={itemVariants}>
          <div className="profile-circle">♻</div>
          <div className="profile-decoration">🌿</div>
        </motion.div>

        <motion.div className="student-details" variants={itemVariants}>
          <div className="detail-row">
            <span>FULL NAME</span>
            <strong>Saurabh Lubal</strong>
          </div>

          <div className="detail-row">
            <span>PROGRAM & DEGREE</span>
            <strong>Bachelor of Technology (B.Tech)</strong>
          </div>

          <div className="detail-row">
            <span>DEPARTMENT</span>
            <strong>Information Technology</strong>
          </div>

          <div className="detail-row">
            <span>STUDENT ROLL NO.</span>
            <strong>24101C0040</strong>
          </div>

          <div className="detail-row">
            <span>SPECIALIZED COURSE</span>
            <strong>E-Waste Management & Environmental Studies</strong>
          </div>

          <div className="detail-row">
            <span>CORE INTERESTS</span>
            <strong>Circular Electronics • Green Tech • IT Ethics</strong>
          </div>
        </motion.div>
      </motion.section>

      {/* Competencies / Academic Focus Grid */}
      <section className="student-competencies-section">
        <div className="text-center" style={{ marginBottom: "40px" }}>
          <span className="section-label">AREAS OF STUDY</span>
          <h2>Key Sustainability Competencies</h2>
        </div>

        <div className="competencies-grid">
          <div className="competency-card">
            <span className="comp-icon">🔋</span>
            <h3>Hardware Lifecycle Analysis</h3>
            <p>
              Studying the cradle-to-grave trajectory of consumer electronics, batteries, printed circuit boards (PCBs), and semiconductors.
            </p>
          </div>

          <div className="competency-card">
            <span className="comp-icon">⚖️</span>
            <h3>Compliance & E-Waste Policies</h3>
            <p>
              Reviewing national and global regulations (WEEE directives, EPR policies, and hazardous chemical restrictions).
            </p>
          </div>

          <div className="competency-card">
            <span className="comp-icon">🌐</span>
            <h3>Sustainable Cloud & Computing</h3>
            <p>
              Evaluating data center energy efficiency, carbon emission metrics, and software optimization techniques that extend legacy hardware utility.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Journey & Philosophy */}
      <motion.section
        className="student-message"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span className="section-label">MY LEARNING MANIFESTO</span>
          <h2>
            Developing technology that <span>respects planetary limits.</span>
          </h2>
        </div>

        <div>
          <p>
            As technology students, our code and hardware choices directly impact global energy consumption and landfill toxicity. My objective through this course and e-portfolio is to champion circular economy principles—ensuring that what we engineer can be responsibly dismantled, recycled, and reused.
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link to="/portfolio" className="explore-btn">
              Explore Coursework & Submissions →
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}