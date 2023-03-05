import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Lecturers from "./components/Lecturers";
import Students from "./components/Students";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SingleStudent from "./components/SingleStudent";
import SingleLecture from "./components/SingleLecture";
function App() {
  // initialize a  state
  const[students, setStudents] =useState([])
  const[lecturers, setLecturers] =useState([])
  const[reload, setReload] =useState(false)
  const[del, setDelete] = useState(false)
  //fetch data from student endpoint API
  console.log(students)
  useEffect(()=>{
    fetch("http://localhost:3000/students")
    .then(response=>response.json())
    .then(students => {
      setStudents(students)
    })
  },[del])

  //fetch data from lecturer endpoint API
  useEffect(()=>{
    fetch("http://localhost:3000/lecturers")
    .then(response=>response.json())
    .then(lecturer => {
      setLecturers(lecturer)
    })
  },[reload])

  function handleReload(){
      setReload(!reload)
  }

  function handleDelete(){
    setDelete(!del)
  }
console.log(lecturers)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<Contacts />} />
        <Route path="/lectures" element={<Lecturers lecturers={lecturers} handleReload={handleReload} />} />
        <Route path="/students" element={<Students students={students} handleDelete={handleDelete}/>} />
        <Route path="/students/:id" element={<SingleStudent/>} />
        <Route path="/lecturers/:id" element={<SingleLecture/>}/>
      </Routes>
    </>
  );
}

export default App;
