import React, { useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import axios from "axios";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:3001/room-details");
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.customTable}>
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
  );
};

export default Rooms;
