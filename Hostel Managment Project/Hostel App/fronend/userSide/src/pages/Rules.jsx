import React, { useEffect, useState } from "react";
import style from "./Rules.module.css";

const Rules = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/rules-details")
      .then((response) => response.json())
      .then((data) => setRules(data))
      .catch((error) => console.error("Error fetching rules data:", error));
  }, []);

  return (
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
  );
};

export default Rules;
