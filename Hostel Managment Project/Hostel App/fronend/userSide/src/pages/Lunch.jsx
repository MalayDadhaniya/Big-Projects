import React, { useEffect, useState } from "react";
import styles from "./Lunch.module.css"; // Import CSS module
import axios from "axios";

const Lunch = () => {
  const [lunchDetails, setLunchDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/lunch-details")
      .then((response) => {
        setLunchDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lunch details:", error);
      });
  }, []);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.customTable}>
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
  );
};

export default Lunch;
