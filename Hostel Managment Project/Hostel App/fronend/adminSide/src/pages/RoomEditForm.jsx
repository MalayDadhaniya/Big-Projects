import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./RoomEditForm.module.css";

const RoomEditForm = () => {
  const { room_no } = useParams();
  const [totalStudents, setTotalStudents] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/room-details/${room_no}`
        );
        setTotalStudents(response.data.total_students);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchRoomDetails();
  }, [room_no]);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/room-details/${room_no}`, {
        total_students: totalStudents,
      });
      alert("Room details updated successfully");
      navigate("/room-edit");
    } catch (error) {
      console.error("Error updating room details:", error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleEdit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="totalStudents" className={styles.label}>
            Total Students
          </label>
          <input
            type="number"
            id="totalStudents"
            value={totalStudents}
            onChange={(e) => setTotalStudents(e.target.value)}
            className={styles.input}
            placeholder="Enter total students"
          />
        </div>
        <button type="submit" className={styles.editButton}>
          Edit
        </button>
      </form>
    </div>
  );
};

export default RoomEditForm;
