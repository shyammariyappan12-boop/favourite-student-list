import { useStudents } from "../context/StudentContext";

function FavouriteStudentsPage() {
  const { favourites, removeFromFavourite } = useStudents();

  return (
    <div className="page-container">
      <h2>Favourite Students</h2>
      {favourites.length === 0 ? (
        <p className="empty-message">No favourite students added yet</p>
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <div key={student.id} className="student-card">
              <div>
                <h3>{student.name}</h3>
                <p className="roll-no">Roll No: {student.rollNo}</p>
              </div>
              <button
                type="button"
                className="btn btn-remove"
                onClick={() => removeFromFavourite(student.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouriteStudentsPage;