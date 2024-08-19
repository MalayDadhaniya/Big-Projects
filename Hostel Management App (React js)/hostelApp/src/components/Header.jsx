import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdNotificationsOutline, IoMdSearch } from "react-icons/io";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header_container}>
      <div className={style.menu}>
        <HiMenuAlt1 className={style.header_icons} />
      </div>
      <name className={style.header_title}>HushHaven Hostel</name>
      <div className={style.notifi_search}>
        <div className={style.notification}>
          <IoMdNotificationsOutline className={style.header_icons} />
        </div>
        <div className={style.search}>
          <IoMdSearch className={style.header_icons} />
        </div>
      </div>
    </header>
  );
};

export default Header;
