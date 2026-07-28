import { Link } from "react-router-dom";

const assignments = [
  {
    title: "Assignment 01",
    type: "PDF DOCUMENT",
    description: "E-waste and environmental sustainability assignment.",
    file: "/assignments/assignment-01.pdf",
    icon: "📄",
  },
  {
    title: "Assignment 02",
    type: "PDF DOCUMENT",
    description: "Academic work related to e-waste management.",
    file: "/assignments/assignment-02.pdf",
    icon: "📄",
  },
  {
    title: "Environmental Activity",
    type: "IMAGE",
    description: "Photographs and documentation of an environmental activity.",
    file: "/assignments/activity-01.jpg",
    icon: "🖼️",
  },
  {
    title: "Environmental Presentation",
    type: "PDF DOCUMENT",
    description: "Presentation and research related to environmental sustainability.",
    file: "/assignments/presentation-01.pdf",
    icon: "📊",
  },
];

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
          A collection of my academic work related to e-waste,
          environmental sustainability and responsible technology.
        </p>

      </section>


      <section className="work-grid">

        {assignments.map((item, index) => (
          <article className="work-card" key={index}>

            <div className="card-top">

              <div className="card-icon">
                {item.icon}
              </div>

              <span className="card-number">
                {String(index + 1).padStart(2, "0")}
              </span>

            </div>


            <div className="card-content">

              <p className="card-type">
                {item.type}
              </p>

              <h2>
                {item.title}
              </h2>

              <p>
                {item.description}
              </p>

            </div>


           <Link
  to={`/work/${item.id}`}
  className="view-work"
>
  View Work
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
            This portfolio will continue to grow as new assignments,
            activities and academic work are completed.
          </p>
        </div>

      </section>

    </main>
  );
}

export default Portfolio;