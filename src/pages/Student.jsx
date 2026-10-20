import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
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
  ExternalLink,
  Code2
} from "lucide-react";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Student() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main className="student-page">
      <section className="student-header">
        <span className="section-label">STUDENT DOSSIER</span>
        <h1>
          Academic <span className="gradient-text">Profile.</span>
        </h1>
        <p>
          Information Technology student researching circular electronics, hazardous e-waste reduction, and sustainable software architecture.
        </p>
      </section>

      {/* Profile Card with Photo */}
      <motion.section
        className="student-profile"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="profile-visual" variants={itemVariants}>
          <div className="profile-photo-container">
            <img
              src="/images/saurabh-lubal.jpg"
              alt="Saurabh Lubal"
              className="student-profile-photo"
              loading="eager"
            />
            <div className="profile-circle-ring"></div>
            <div className="profile-badge-pill">
              <span className="badge-live-pulse"></span> B.Tech IT
            </div>
          </div>
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
            <strong>Software Development • Circular Electronics • Green Computing</strong>
          </div>

          <div className="student-social-pills">
            <a
              href="https://github.com/saurabhlubal"
              target="_blank"
              rel="noopener noreferrer"
              className="student-social-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} /> GitHub <ExternalLink size={12} />
            </a>
            <a
              href="https://linkedin.com/in/saurabhlubal"
              target="_blank"
              rel="noopener noreferrer"
              className="student-social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile - Connect with Saurabh Lubal"
            >
              <LinkedinIcon size={16} /> LinkedIn <ExternalLink size={12} />
            </a>
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
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
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