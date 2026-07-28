function About() {
  return (
    <main className="about-page">

      <section className="about-header">

        <p className="section-label">
          ABOUT THE SUBJECT
        </p>

        <h1>
          E-Waste &
          <span> Sustainability.</span>
        </h1>

        <p>
          Understanding the relationship between technology,
          electronic waste and our environment.
        </p>

      </section>


      <section className="about-content">

        <div className="about-text">

          <p className="section-label">
            WHY THIS SUBJECT MATTERS
          </p>

          <h2>
            Technology has an
            <span> environmental cost.</span>
          </h2>

          <p>
            Electronic devices have become an essential part of
            modern life. However, the rapid growth of technology
            also leads to an increasing amount of electronic waste.
          </p>

          <p>
            Understanding e-waste helps us recognise its impact on
            the environment and learn how responsible consumption,
            recycling, reuse and proper disposal can contribute to
            a more sustainable future.
          </p>

        </div>


        <div className="environment-cards">

          <div className="environment-card">
            <span>♻</span>
            <h3>Reduce</h3>
            <p>
              Reduce unnecessary electronic consumption and waste.
            </p>
          </div>

          <div className="environment-card">
            <span>🔄</span>
            <h3>Reuse</h3>
            <p>
              Extend the useful life of electronic devices whenever
              possible.
            </p>
          </div>

          <div className="environment-card">
            <span>🌱</span>
            <h3>Recycle</h3>
            <p>
              Ensure electronic waste reaches responsible recycling
              systems.
            </p>
          </div>

        </div>

      </section>


      <section className="subject-focus">

        <p className="section-label">
          PORTFOLIO FOCUS
        </p>

        <h2>
          What you'll find
          <span> here.</span>
        </h2>

        <div className="focus-grid">

          <div>
            <strong>01</strong>
            <h3>Assignments</h3>
            <p>
              Academic assignments and written work completed
              throughout the subject.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Activities</h3>
            <p>
              Documentation, photographs and evidence of
              environmental activities.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Presentations</h3>
            <p>
              Presentations, research and classroom contributions.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default About;