import React, { useEffect, useState } from "react";
import style from "./StudentFormEdit.module.css";
import axios from "axios";

const StudentFormEdit = () => {
  const [studentInfo, setStudentInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/student-form-edit")
      .then((response) => setStudentInfo(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/student-form-edit/${id}`)
      .then(() => {
        // Remove deleted item from the local state
        setStudentInfo(studentInfo.filter((st) => st._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.StudentFormEdit}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date</th>
            <th>Profession</th>
            <th>Delete</th>
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
              <td>
                <button onClick={() => handleDelete(stInfo._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentFormEdit;
