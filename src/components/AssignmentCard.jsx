function AssignmentCard({ assignment }) {
  return (
    <div
      style={{
        background: "#1b1b1b",
        borderRadius: "15px",
        padding: "20px",
        color: "white",
        width: "350px",
      }}
    >
      <img
        src={assignment.image}
        alt={assignment.title}
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      />

      <h2>{assignment.title}</h2>

      <p>{assignment.description}</p>

      <p>
        <strong>Date:</strong> {assignment.date}
      </p>
    </div>
  );
}

export default AssignmentCard;