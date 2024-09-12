import React from "react";
import style from "./AdminHeader.module.css";

const AdminHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.hostelName}>Hostel / AdminPanel</div>
      <form action="">
        <input type="text" placeholder="Search here..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default AdminHeader;
