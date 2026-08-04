import assignments from "../data/assignments";
import AssignmentCard from "../components/AssignmentCard";

function Assignments() {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {assignments.map((assignment) => (
        <AssignmentCard
          key={assignment.id}
          assignment={assignment}
        />
      ))}
    </div>
  );
}

export default Assignments;