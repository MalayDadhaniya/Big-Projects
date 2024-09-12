import React from "react";
import { Link } from "react-router-dom";
import style from "./AdminSidebar.module.css";

const AdminSidebar = () => {
  return (
    <div className={style.sidebar}>
      <ul>
        <Link to="/" className={style.PageLink}>
          <li>Dashboard</li>
        </Link>

        <Link to="/room-edit" className={style.PageLink}>
          <li>Room-Edit</li>
        </Link>

        <Link to="/rules-edit" className={style.PageLink}>
          <li>Rules-Edit</li>
        </Link>

        <Link to="/lunch-image-edit" className={style.PageLink}>
          <li>LunchImage-Edit</li>
        </Link>

        <Link to="/student-form-edit" className={style.PageLink}>
          <li>Student Form Details</li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
