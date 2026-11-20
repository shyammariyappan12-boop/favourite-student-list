import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { StudentProvider } from "./context/StudentContext";
import FavouriteStudentsPage from "./pages/FavouriteStudentsPage";
import StudentListPage from "./pages/StudentListPage";
import "./App.css";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<StudentListPage />} />
          <Route path="/favourites" element={<FavouriteStudentsPage />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;