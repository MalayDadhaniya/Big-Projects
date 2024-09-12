import React from "react";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.img_hostelDetails}>
        <div className={style.imgScorall}></div>
        <div className={style.hostelDetails}>
          <ul>
            <li>
              <h3>HushHaven Hostel</h3>
            </li>
            <li>Address : Patel colony, Nanamova, Rajkot, India</li>
            <li>Email : hushhaven3056@gmail.com</li>
            <li>Contact No : +91 8238576925</li>
          </ul>
        </div>
      </div>
      <div className={style.studentDetails}>
        <div className={style.box}>Panding Students : 4</div>
        <div className={style.box}>Total Gap : 13</div>
        <div className={style.box}>Total Students : 75</div>
        <div className={style.box}>Total Rooms : 25</div>
        <div className={style.box}>Panding Students : 13</div>
      </div>
      <div className={style.hostelMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.891880927258!2d70.76793167506882!3d22.28208507969965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca31553159ef%3A0x8d07bc2341d217a9!2sAtmiya%20College%2C%205-B%2C%20Kalavad%20Rd%2C%20Ramdham%20Society%2C%20Rajkot%2C%20Gujarat%20360005!5e0!3m2!1sen!2sin!4v1725872846004!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className={style.roomMap_imgs}>
        <div className={style.hostelImages1}></div>
        <div className={style.hostelImages2}></div>
        <div className={style.hostelImages3}></div>
      </div>
    </div>
  );
};

export default Home;
