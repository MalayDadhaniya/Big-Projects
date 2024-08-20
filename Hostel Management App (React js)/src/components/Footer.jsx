import React from "react";
import style from "./Footer.module.css";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlineLunchDining } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footer_container}>
      <div>
        <Link to="/rules" className={style.links}>
          <BsFileEarmarkRuled className={style.footer_icon} />
          <br />
          <span>Rules</span>
        </Link>
      </div>
      <div>
        <Link to="/" className={style.links}>
          <MdOutlineRoomPreferences className={style.footer_icon} />
          <br />
          <span>Room</span>
        </Link>
      </div>
      <div>
        <Link to="/form" className={style.links}>
          <FaCirclePlus
            className={`${style.footer_icon} ${style.pluse_icon}`}
          />
        </Link>
      </div>
      <div>
        <MdOutlineLunchDining className={style.footer_icon} />
        <br />
        <span>Lunch</span>
      </div>
      <div>
        <FaRegFileAlt className={style.footer_icon} />
        <br />
        <span>File's</span>
      </div>
    </footer>
  );
};

export default Footer;
