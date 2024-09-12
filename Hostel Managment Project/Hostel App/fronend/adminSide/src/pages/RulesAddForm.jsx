import React, { useState } from "react";
import "./RulesAddForm.module.css";

const RulesAddForm = () => {
  const [rule, setRule] = useState("");
  const [details, setDetails] = useState("");
  const [rulesList, setRulesList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new rule object
    const newRule = {
      rule,
      details: details.split("\n"), // Split details by newline to create an array
    };

    // Post the new rule to the backend
    fetch("http://localhost:3001/rules-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRule),
    })
      .then((response) => response.json())
      .then((data) => {
        // Add the new rule to the rules list
        setRulesList([...rulesList, data]);

        // Clear the form
        setRule("");
        setDetails("");
      })
      .catch((error) => console.error("Error adding rule:", error));
  };

  return (
    <div className="rules-add-form">
      <h2>Add New Rule</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rule">Rule</label>
          <input
            type="text"
            id="rule"
            value={rule}
            onChange={(e) => setRule(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">Rules Details</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows="4"
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>

      <h3>Rules List</h3>
      <ul>
        {rulesList.map((r, index) => (
          <li key={index}>
            <strong>{r.rule}</strong>
            <ul>
              {r.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RulesAddForm;
