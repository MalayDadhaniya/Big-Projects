import React, { useEffect, useState } from "react";
import style from "./RulesEdit.module.css";
import { Link } from "react-router-dom";

const RulesEdit = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/rules-details")
      .then((response) => response.json())
      .then((data) => setRules(data))
      .catch((error) => console.error("Error fetching rules data:", error));
  }, []);

  const handleDeleteRule = (id) => {
    fetch(`http://localhost:3001/rules-details/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setRules(rules.filter((rule) => rule._id !== id));
        } else {
          console.error("Error deleting rule");
        }
      })
      .catch((error) => console.error("Error deleting rule:", error));
  };

  return (
    <div className={style.Rules}>
      <div className={style.rules_title}>
        Rule'<span>s</span>
        <Link to="/rules-edit-form">
          <button>Add</button>
        </Link>
      </div>
      <div className={style.rules_table}>
        <table>
          <thead>
            <tr>
              <th>Rule</th>
              <th>Details</th>
              <th>Edit-Delete</th>
            </tr>
          </thead>
          <tbody>
            {rules.map((rule) => (
              <tr key={rule._id}>
                <td>
                  <strong>{rule.rule}</strong>
                </td>
                <td>
                  {Array.isArray(rule.details) ? (
                    <ul>
                      {rule.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    rule.details
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteRule(rule._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RulesEdit;
