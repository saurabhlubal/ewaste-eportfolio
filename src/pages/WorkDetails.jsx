import { useParams, Link } from "react-router-dom";

const assignments = [
  {
    id: "assignment-01",
    title: "Assignment 01",
    type: "PDF DOCUMENT",
    description:
      "E-waste and environmental sustainability assignment.",
    file: "/assignments/assignment-01.pdf",
    icon: "📄",
  },
  {
    id: "assignment-02",
    title: "Assignment 02",
    type: "PDF DOCUMENT",
    description:
      "Academic work related to e-waste management.",
    file: "/assignments/assignment-02.pdf",
    icon: "📄",
  },
  {
    id: "activity-01",
    title: "Environmental Activity",
    type: "IMAGE",
    description:
      "Photographs and documentation of an environmental activity.",
    file: "/assignments/activity-01.jpg",
    icon: "🖼️",
  },
  {
    id: "presentation-01",
    title: "Environmental Presentation",
    type: "PDF DOCUMENT",
    description:
      "Presentation and research related to environmental sustainability.",
    file: "/assignments/presentation-01.pdf",
    icon: "📊",
  },
];

function WorkDetails() {
  const { id } = useParams();

  const work = assignments.find((item) => item.id === id);

  if (!work) {
    return (
      <main className="work-details-page">
        <div className="not-found">
          <h1>Work Not Found</h1>

          <p>
            The academic work you're looking for doesn't exist.
          </p>

          <Link to="/portfolio" className="back-button">
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  const isImage = work.type === "IMAGE";

  return (
    <main className="work-details-page">

      <section className="work-details-header">

        <Link to="/portfolio" className="back-link">
          ← Back to Portfolio
        </Link>

        <div className="details-icon">
          {work.icon}
        </div>

        <p className="section-label">
          {work.type}
        </p>

        <h1>
          {work.title}
        </h1>

        <p>
          {work.description}
        </p>

      </section>


      <section className="work-preview">

        {isImage ? (
          <img
            src={work.file}
            alt={work.title}
          />
        ) : (
          <iframe
            src={work.file}
            title={work.title}
          />
        )}

      </section>


      <div className="work-actions">

        <a
          href={work.file}
          target="_blank"
          rel="noopener noreferrer"
          className="open-file-button"
        >
          Open Full File ↗
        </a>

        <Link
          to="/portfolio"
          className="secondary-button"
        >
          Back to Portfolio
        </Link>

      </div>

    </main>
  );
}

export default WorkDetails;