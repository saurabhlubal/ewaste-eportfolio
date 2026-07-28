import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      <section className="home-hero">

        <div className="home-content">

          <p className="eyebrow">
            E-WASTE × ENVIRONMENTAL SUSTAINABILITY
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
            on e-waste and environmental sustainability.
          </p>

          <div className="student-tags">
            <span>B.Tech IT</span>
            <span>Roll No. 24101C0040</span>
            <span>E-Waste & Environment</span>
          </div>

          <Link to="/portfolio" className="explore-btn">
            Explore Work →
          </Link>

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
          Here you can explore my assignments, activities,
          presentations and other academic work collected
          throughout the subject.
        </p>

      </section>

    </main>
  );
}

export default Home;