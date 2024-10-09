import React from "react";
import style from "./AdminHeader.module.css";

const AdminHeader = () => {
  const handleLogout = () => {
    window.location.href = "http://localhost:5173";
  };

  return (
    <div className={style.header}>
      <div className={style.hostelName}>Hostel / AdminPanel</div>
      <form action="">
        <input type="text" placeholder="Search here..." />
        <button type="button">Search</button>
        <button type="button" onClick={handleLogout}>
          Log Out
        </button>
      </form>
    </div>
  );
};

export default AdminHeader;
