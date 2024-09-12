import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Header and Footer
import Header from "./components/Header";
import Footer from "./components/Footer";
// All Admin Pages
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Lunch from "./pages/Lunch";
import Rooms from "./pages/Rooms";
import StudentForm from "./pages/StudentForm";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules-details" element={<Rules />} />
        <Route path="/lunch-details" element={<Lunch />} />
        <Route path="/room-details" element={<Rooms />} />
        <Route path="/student-form" element={<StudentForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
