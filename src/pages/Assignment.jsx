import { useParams, Link } from "react-router-dom";
import assignments from "../data/assignments";

function Assignment() {
  const { id } = useParams();

  const assignment = assignments.find(
    (item) => item.id === Number(id)
  );

  if (!assignment) {
    return <h2>Assignment not found.</h2>;
  }

  return (
    <main className="assignment-page">

      <Link to="/portfolio" className="back-btn">
        ← Back to Portfolio
      </Link>

      <h1>{assignment.title}</h1>

      <p className="assignment-date">
        {assignment.date}
      </p>

      <img
        src={assignment.image}
        alt={assignment.title}
        className="assignment-full-image"
      />

      <p
        style={{
          whiteSpace: "pre-line",
          lineHeight: "1.8",
          textAlign: "justify",
        }}
      >
        {assignment.description}
      </p>

    </main>
  );
}

export default Assignment;