import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Desktop from "./pages/desktop/Desktop";
import Rules from "./pages/rules/Rules";
import Form from "./pages/addmitionForm/Form";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
