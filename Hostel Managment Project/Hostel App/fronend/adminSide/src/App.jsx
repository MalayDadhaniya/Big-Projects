import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import Dashboard from "./pages/Dashboard";
import RoomEdit from "./pages/RoomEdit";
import RulesEdit from "./pages/RulesEdit";
import LunchImageEdit from "./pages/LunchImageEdit";
import StudentFormEdit from "./pages/StudentFormEdit";
import RulesAddForm from "./pages/RulesAddForm";
import RoomEditForm from "./pages/RoomEditForm";

function App() {
  return (
    <Router>
      <div className="header_sidebar">
        <AdminSidebar />
        <div>
          <AdminHeader />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/room-edit" element={<RoomEdit />} />
              <Route path="/rules-edit" element={<RulesEdit />} />
              <Route path="/lunch-image-edit" element={<LunchImageEdit />} />
              <Route path="/student-form-edit" element={<StudentFormEdit />} />
              <Route path="/rules-edit-form" element={<RulesAddForm />} />
              <Route
                path="/room-edit-form/:room_no"
                element={<RoomEditForm />}
              />{" "}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
