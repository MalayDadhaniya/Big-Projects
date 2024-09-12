import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LunchImageEdit = () => {
  const [lunchDetails, setLunchDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLunchDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3001/lunch-details");
        setLunchDetails(response.data);
      } catch (err) {
        console.error("Error fetching lunch details:", err);
        setError("Error fetching lunch details. Please check the server logs.");
      }
    };
    fetchLunchDetails();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lunch Details</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lunchDetails.map((item) => (
            <tr key={item._id}>
              <td>{item.day}</td>
              <td>{item.breakfast.join(", ")}</td>
              <td>{item.lunch.join(", ")}</td>
              <td>{item.dinner.join(", ")}</td>
              <td>
                <Link to={`/lunch-edit-form/${item._id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LunchImageEdit;
