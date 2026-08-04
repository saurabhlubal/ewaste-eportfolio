import { Link } from "react-router-dom";
import assignments from "../data/assignments";

function Portfolio() {
  return (
    <main className="portfolio-page">

      <section className="portfolio-header">

        <p className="section-label">
          MY ACADEMIC WORK
        </p>

        <h1>
          Assignments &
          <span> Activities.</span>
        </h1>

        <p>
          A collection of my academic work related to
          e-waste, environmental sustainability and
          responsible technology.
        </p>

      </section>

      <section className="work-grid">

        {assignments.map((item) => (

          <article
            className="work-card"
            key={item.id}
          >

            <div className="card-top">

              <div className="card-icon">
                📄
              </div>

              <span className="card-number">
                {String(item.id).padStart(2, "0")}
              </span>

            </div>

            <div className="card-content">

              <p className="card-type">
                ASSIGNMENT
              </p>

              <h2>
                {item.title}
              </h2>

              <p>
                {item.shortDescription}
              </p>

            </div>

            <Link
              to={`/assignment/${item.id}`}
              className="view-work"
            >
              View Assignment
              <span>→</span>
            </Link>

          </article>

        ))}

      </section>

      <section className="portfolio-note">

        <div className="note-icon">
          +
        </div>

        <div>

          <h3>
            More work coming soon
          </h3>

          <p>
            This portfolio will continue to grow as
            new assignments, activities and academic
            work are completed.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Portfolio;