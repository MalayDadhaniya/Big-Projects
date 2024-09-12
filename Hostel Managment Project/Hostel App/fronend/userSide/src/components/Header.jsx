import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.hostelName}>HushHaven / Hostel</div>
      <ul>
        <Link to="/" className={style.PageLink}>
          <li>Home</li>
        </Link>

        <Link to="/rules-details" className={style.PageLink}>
          <li>Rules</li>
        </Link>

        <Link to="/lunch-details" className={style.PageLink}>
          <li>Lunch Details</li>
        </Link>

        <Link to="/room-details" className={style.PageLink}>
          <li>Room Details</li>
        </Link>

        <Link to="/student-form" className={style.PageLink}>
          <li>Student Form</li>
        </Link>

        <Link to="/Login" className={style.PageLink}>
          <li>
            <button>Login</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
