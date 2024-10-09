import React, { useEffect, useState } from "react";
import style from "./Dashboard.module.css";
import axios from "axios";

const Dashboard = () => {
  const [lunchDetails, setLunchDetails] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [rules, setRules] = useState([]);
  const [studentInfo, setStudentInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lunchRes, roomsRes, rulesRes, studentRes] = await Promise.all([
          axios.get("http://localhost:3001/lunch-details"),
          axios.get("http://localhost:3001/room-details"),
          axios.get("http://localhost:3001/rules-details"),
          axios.get("http://localhost:3001/student-form-edit"),
        ]);

        setLunchDetails(lunchRes.data);
        setRooms(roomsRes.data);
        setRules(rulesRes.data);
        setStudentInfo(studentRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Student Form Edit */}
      <div className={style.pageTitle}>Pending Students Information</div>
      <div className={style.StudentFormEdit}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Date</th>
              <th>Profession</th>
            </tr>
          </thead>
          <tbody>
            {studentInfo.map((stInfo) => (
              <tr key={stInfo._id}>
                <td>{stInfo.name}</td>
                <td>{stInfo.email}</td>
                <td>{stInfo.address}</td>
                <td>{stInfo.date}</td>
                <td>{stInfo.profession}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Lunch Details */}
      <div className={style.pageTitle}>Lunch Details</div>
      <div className={style.tableContainer}>
        <table className={style.customTable}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {lunchDetails.map((item, index) => (
              <tr key={index}>
                <td>{item.day}</td>
                <td>{item.breakfast.join(", ")}</td>
                <td>{item.lunch.join(", ")}</td>
                <td>{item.dinner.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rooms Details */}
      <div className={style.pageTitle}>Hostel Room Details</div>
      <div className={style.tableContainer}>
        <table className={style.customTable}>
          <thead>
            <tr>
              <th>Room No</th>
              <th>Total Space</th>
              <th>Total Students</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.room_no}>
                <td>{room.room_no}</td>
                <td>{room.total_space}</td>
                <td>{room.total_students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rules Section */}
      <div className={style.pageTitle}>Hostel Rules</div>
      <div className={style.Rules}>
        <div className={style.rules_title}>
          Rule'<span>s</span>
        </div>
        <div className={style.rules_all}>
          <ol>
            {rules.map((rule, index) => (
              <li key={index}>
                <strong>{rule.rule}:</strong>
                <ul>
                  {Array.isArray(rule.details) ? (
                    rule.details.map((detail, i) => <li key={i}>{detail}</li>)
                  ) : (
                    <li>{rule.details}</li>
                  )}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
