import React from "react";
import style from "./Desktop.module.css";
import img1 from "../../images/hostelImg1.jpg";
import img2 from "../../images/hostelImg2.jpg";
import img3 from "../../images/hostelImg3.jpg";
import "bootstrap/dist/css/bootstrap.css";

const Desktop = () => {
  return (
    <div className={style.desktop_container}>
      <div className={style.img_container}>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={img1}
                className={`d-block w-100 ${style.hostelImg}`}
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={img2}
                className={`d-block w-100 ${style.hostelImg}`}
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={img3}
                className={`d-block w-100 ${style.hostelImg}`}
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.information_container}>
        <div className={style.information_title}>
          <div className={style.information_title_text}>
            <p>Total Student : 200</p>
            <p2>Today Date is 31-07-2024</p2>
          </div>
          <form action="">
            <select className={style.select_box}>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Seturday</option>
              <option>Sunday</option>
            </select>
          </form>
        </div>
        <div className={style.circle_and_info}>
          <p className={style.info1}>
            <span>12</span> <br /> Student Gap
          </p>
          <p className={style.info2}>
            <span>40</span>
            <br /> Rooms in a <br /> hostel
          </p>
          <div className={style.circle}>
            <div className={style.inner_circle}>
              <div className={style.inner_inner_circle}></div>
            </div>
          </div>
          <p className={style.info3}>
            <span>6</span> <br /> Student Form <br />
            Panding
          </p>
          <p className={style.info4}>
            <span>188</span> <br /> Student Available
          </p>
        </div>
      </div>
      <div className={style.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12713.13896277051!2d72.5680336953799!3d23.02211600876637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbbfcdeb3e33%3A0x11a782bf6775a71d!2sAtmiya%20University!5e0!3m2!1sen!2sin!4v1722688628672!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Desktop;
