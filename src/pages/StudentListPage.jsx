import { useStudents } from "../context/StudentContext";

function StudentListPage() {
  const { students, favourites, addToFavourite } = useStudents();

  return (
    <div className="page-container">
      <h2>Student List</h2>
      <div className="student-grid">
        {students.map((student) => {
          const isFav = favourites.some((item) => item.id === student.id);

          return (
            <div key={student.id} className="student-card">
              <div>
                <h3>{student.name}</h3>
                <p className="roll-no">Roll No: {student.rollNo}</p>
              </div>
              <button
                type="button"
                className={`btn ${isFav ? "btn-added" : "btn-primary"}`}
                onClick={() => addToFavourite(student)}
                disabled={isFav}
              >
                {isFav ? "Added to Favourite" : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentListPage;