import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

const INITIAL_STUDENTS = [
  { id: 1, name: "Aravind Kumar", rollNo: "CS101" },
  { id: 2, name: "Divya Bharathi", rollNo: "CS102" },
  { id: 3, name: "Karthik Raja", rollNo: "CS103" },
  { id: 4, name: "Meenakshi Sundaram", rollNo: "CS104" },
  { id: 5, name: "Praveen Raj", rollNo: "CS105" },
  { id: 6, name: "Sneha Lakshmi", rollNo: "CS106" },
];

export function StudentProvider({ children }) {
  const [students] = useState(INITIAL_STUDENTS);
  const [favourites, setFavourites] = useState([]);

  const addToFavourite = (student) => {
    setFavourites((prev) => {
      const exists = prev.some((item) => item.id === student.id);
      if (exists) return prev;
      return [...prev, student];
    });
  };

  const removeFromFavourite = (studentId) => {
    setFavourites((prev) => prev.filter((item) => item.id !== studentId));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addToFavourite,
        removeFromFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}