import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Cpu, 
  Recycle, 
  Leaf, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  IdCard,
  Building2,
  FileCheck
} from "lucide-react";

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
          Information Technology student researching circular electronics, hazardous e-waste reduction, and sustainable software architecture.
        </p>
      </section>

      {/* Profile Card */}
      <motion.section
        className="student-profile"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="profile-visual" variants={itemVariants}>
          <div className="profile-circle">
            <Recycle size={70} className="icon-emerald" />
          </div>
          <div className="profile-decoration">🌱</div>
        </motion.div>

        <motion.div className="student-details" variants={itemVariants}>
          <div className="detail-row">
            <span>FULL NAME</span>
            <strong>Saurabh Lubal</strong>
          </div>

          <div className="detail-row">
            <span>DEGREE PROGRAM</span>
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
            <span>ACADEMIC FOCUS</span>
            <strong>Circular Electronics • Clean Dismantling • Green Tech</strong>
          </div>
        </motion.div>
      </motion.section>

      {/* Sustainability Competencies Grid */}
      <section className="student-competencies-section">
        <div className="text-center" style={{ marginBottom: "35px" }}>
          <span className="section-label">AREAS OF STUDY</span>
          <h2>Key Coursework Competencies</h2>
        </div>

        <div className="competencies-grid">
          <div className="competency-card">
            <div className="comp-icon-wrapper">
              <Cpu size={28} className="comp-icon-svg" />
            </div>
            <h3>Hardware Lifecycle Analysis</h3>
            <p>
              Auditing the entire path of consumer devices, batteries, printed circuit boards (PCBs), and rare-earth components from manufacture to recovery.
            </p>
          </div>

          <div className="competency-card">
            <div className="comp-icon-wrapper">
              <Award size={28} className="comp-icon-svg" />
            </div>
            <h3>Compliance & Environmental Norms</h3>
            <p>
              Studying national electronic waste guidelines, statutory Extended Producer Responsibility (EPR) mandates, and hazardous substance bans.
            </p>
          </div>

          <div className="competency-card">
            <div className="comp-icon-wrapper">
              <Leaf size={28} className="comp-icon-svg" />
            </div>
            <h3>Green Computing Standards</h3>
            <p>
              Investigating energy-efficient software design, reducing carbon overhead in digital infrastructure, and extending legacy hardware lifespans.
            </p>
          </div>
        </div>
      </section>

      {/* Student Learning Manifesto */}
      <motion.section
        className="student-message"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span className="section-label">ACADEMIC MANIFESTO</span>
          <h2>
            Building technology that <span>respects our environment.</span>
          </h2>
        </div>

        <div>
          <p>
            As future software engineers and IT professionals, every technological decision we make carries physical environmental consequences. Through this e-portfolio, I explore how engineers can advocate for circular economy principles—ensuring that computing hardware is safely refurbished, dismantled, and kept out of hazardous landfill dumps.
          </p>

          <div style={{ marginTop: "24px" }}>
            <Link to="/portfolio" className="explore-btn">
              Explore Academic Work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}