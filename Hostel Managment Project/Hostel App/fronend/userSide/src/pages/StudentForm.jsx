import React, { useState } from "react";
import style from "./StudentForm.module.css";
import axios from "axios";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [profession, setProfession] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/studentInfo", {
        name,
        email,
        address,
        date,
        profession,
      })
      .then((result) => console.log("Local submission success:", result))
      .catch((err) => console.log("Local submission error:", err));

    const formData = new FormData(e.target);
    formData.append("access_key", "6f4ad288-422e-4794-8a07-6ab42092e9dd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        console.log("Web3Forms submission success:", result);
      }
    } catch (error) {
      console.log("Web3Forms submission error:", error);
    }
  };

  return (
    <div className={style.studentform}>
      <form onSubmit={handleSubmit}>
        <label>Enter Name : </label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Enter Email : </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Enter Address : </label>
        <br />
        <input
          type="text"
          name="address"
          placeholder="Enter Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <br />
        <label>Select Current Date : </label>
        <br />
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />
        <label>Select Profession : </label>
        <br />
        <select
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        >
          <option>--- Select ---</option>
          <option>School</option>
          <option>College</option>
          <option>Job</option>
        </select>
        <br />
        <br />
        <div className={style.submitBtn}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
