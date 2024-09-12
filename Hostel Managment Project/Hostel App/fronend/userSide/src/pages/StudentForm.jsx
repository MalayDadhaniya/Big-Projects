import React, { useState } from "react";
import style from "./StudentForm.module.css";
import axios from "axios";

const StudentForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [date, setDate] = useState();
  const [profession, setProfession] = useState();

  const handaleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/studentInfo", {
        name,
        email,
        address,
        date,
        profession,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.studentform}>
      <form onSubmit={handaleSubmit}>
        <label>Enter Name : </label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Enter Email : </label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Enter Address : </label>
        <br />
        <input
          type="text"
          placeholder="Enter Your Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <br />
        <label>Select Current Date : </label>
        <br />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <br />
        <br />
        <label>Select Profession : </label>
        <br />
        <select onChange={(e) => setProfession(e.target.value)}>
          <option>--- Select ---</option>
          <option>School</option>
          <option>College</option>
          <option>Job</option>
        </select>
        <br />
        <br />
        <div className={style.submitBtn}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
