import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Studenthome from './pages/Studenthome';
import FacultyLogin from './pages/Facultylogin';
import Facultyhome from './pages/Facultyhome';
import AddAttendance from './pages/AddAttendance';
import ViewAttendance from './pages/ViewAttendance';
import AddMarks from './pages/Addmarks';
import ViewMarks from './pages/Viewmarks';
import Aboutus from './pages/Aboutus';
import AddAnnouncement from './pages/AddAnnouncement';
import ViewAnnouncement from './pages/ViewAnnouncement';

const App = () => {
  const [student, setStudent] = useState(null);
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    const s = JSON.parse(localStorage.getItem("student"));
    const f = JSON.parse(localStorage.getItem("faculty"));

    if (s) setStudent(s);
    if (f) setFaculty(f);
  }, []);

  return (
    <div>
      <Navbar student={student} faculty={faculty} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={<Login setStudent={setStudent} />}
        />
        <Route
          path='/facultylogin'
          element={<FacultyLogin setFaculty={setFaculty} />}
        />
        <Route
          path='/studenthome'
          element={
            student
              ? <Studenthome student={student} setStudent={setStudent} />
              : <Navigate to="/login" />
          }
        />
        <Route
          path='/facultyhome'
          element={
            faculty
              ? <Facultyhome faculty={faculty} setFaculty={setFaculty} />
              : <Navigate to="/facultylogin" />
          }
        />
        <Route
          path='/addattendance'
          element={
            faculty
              ? <AddAttendance />
              : <Navigate to="/facultylogin" />
          }
        />
        <Route
          path='/addmarks'
          element={
            faculty
              ? <AddMarks />
              : <Navigate to="/facultylogin" />
          }
        />
        <Route
          path='/viewattendance'
          element={
            student
              ? <ViewAttendance />
              : <Navigate to="/login" />
          }
        />
        <Route
          path='/viewmarks'
          element={
            student
              ? <ViewMarks />
              : <Navigate to="/login" />
          }
        />
        <Route
          path="/addannouncement"
          element={
            faculty
              ? <AddAnnouncement />
              : <Navigate to="/facultylogin" />
          }
        />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/announcement' element ={<ViewAnnouncement />} />
      </Routes>
    </div>
  );
};

export default App;