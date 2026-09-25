import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [videoError, setVideoError] = useState(false);

  return (
    <main className="home-page">
      <section className="home-hero">
        {/* Subtle Environmental / Sustainability Background Video */}
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

        <div className="home-content">
          <p className="eyebrow">
            🌱 E-WASTE × ENVIRONMENTAL SUSTAINABILITY
          </p>

          <h1>
            Saurabh
            <br />
            <span>Lubal.</span>
          </h1>

          <h2>
            B.Tech Information Technology student exploring
            the relationship between technology and our environment.
          </h2>

          <p>
            Welcome to my academic e-portfolio, a collection of
            my assignments, activities and academic work focused
            on responsible e-waste management and green computing.
          </p>

          <div className="student-tags">
            <span>🎓 B.Tech IT</span>
            <span>🆔 Roll No. 24101C0040</span>
            <span>♻️ E-Waste & Environment</span>
          </div>

          <div className="hero-cta-group">
            <Link to="/portfolio" className="explore-btn">
              Explore Work →
            </Link>
            <Link to="/about" className="learn-more-btn">
              Why Sustainability?
            </Link>
          </div>
        </div>

        <div className="home-visual">
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
        </div>
      </section>

      <section className="home-intro">
        <div>
          <p className="section-label">
            ABOUT THIS PORTFOLIO
          </p>

          <h2>
            Technology should
            <span> work with nature.</span>
          </h2>
        </div>

        <p>
          This e-portfolio presents my academic journey through
          the study of e-waste and environmental sustainability.
          Here you can explore my coursework, practical activities,
          field research, and online projects collected throughout
          the academic semester.
        </p>
      </section>
    </main>
  );
}

export default Home;