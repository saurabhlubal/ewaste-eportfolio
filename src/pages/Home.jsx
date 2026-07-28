function Home() {
  return (
    <main className="home-page">

      <section className="home-hero">

        <div className="home-content">

          <div className="eyebrow">
            ACADEMIC E-PORTFOLIO
          </div>

          <h1>
            Saurabh
            <br />
            <span>Lubal.</span>
          </h1>

          <h2>
            E-Waste & Environmental Sustainability
          </h2>

          <p>
            Welcome to my academic e-portfolio. This space presents
            my assignments, activities, research and academic work
            related to e-waste and environmental sustainability.
          </p>

          <div className="student-tags">
            <span>B.Tech Information Technology</span>
            <span>Roll No. 24101C0040</span>
          </div>

          <a href="/portfolio" className="explore-btn">
            Explore My Work →
          </a>

        </div>


        <div className="home-visual">

          <div className="circuit-circle"></div>

          <div className="earth">
            🌍
          </div>

          <div className="recycle-ring">
            ♻
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
            MY E-PORTFOLIO
          </p>

          <h2>
            Learning about
            <span> our impact.</span>
          </h2>
        </div>

        <p>
          Through this portfolio, I document my understanding of
          electronic waste, its environmental impact, responsible
          disposal and sustainable approaches to technology.
        </p>

      </section>

    </main>
  );
}

export default Home;