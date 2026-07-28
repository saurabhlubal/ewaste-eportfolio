function Student() {
  return (
    <main className="student-page">

      <section className="student-header">

        <p className="section-label">
          STUDENT PROFILE
        </p>

        <h1>
          About <span>Me.</span>
        </h1>

        <p>
          A brief introduction to the student behind this
          academic e-portfolio.
        </p>

      </section>


      <section className="student-profile">

        <div className="profile-visual">

          <div className="profile-circle">
            ♻
          </div>

          <div className="profile-decoration">
            🌿
          </div>

        </div>


        <div className="student-details">

          <div className="detail-row">
            <span>NAME</span>
            <strong>Saurabh Lubal</strong>
          </div>

          <div className="detail-row">
            <span>DEGREE</span>
            <strong>B.Tech Information Technology</strong>
          </div>

          <div className="detail-row">
            <span>ROLL NUMBER</span>
            <strong>24101C0040</strong>
          </div>

          <div className="detail-row">
            <span>SUBJECT</span>
            <strong>
              E-Waste / Environmental Sustainability
            </strong>
          </div>

        </div>

      </section>


      <section className="student-message">

        <div>
          <p className="section-label">
            MY LEARNING JOURNEY
          </p>

          <h2>
            Learning to make
            <span> technology sustainable.</span>
          </h2>
        </div>

        <p>
          This e-portfolio represents my academic journey through
          the study of e-waste and environmental sustainability.
          It brings together my coursework, assignments,
          activities and research in one organised digital space.
        </p>

      </section>

    </main>
  );
}

export default Student;