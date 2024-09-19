import React, { useState } from "react";
import style from "./HomePage.module.css";

const HomePage = () => {
  const [inputText, setInputText] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { GoogleGenerativeAI } = await import("@google/generative-ai");
      const genAI = new GoogleGenerativeAI("");
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        tools: [{ codeExecution: {} }],
      });

      const result = await model.generateContent(inputText);
      const responseText = result.response.text();

      setInfo(responseText);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setInfo("Error fetching response.");
    }
  };

  return (
    <div className={style.homeContainer}>
      <div className={style.imageStoreArea}>
        <form onSubmit={handleSubmit}>
          <label>
            <h3>Enter any Text For Information : </h3>
          </label>
          <input
            type="text"
            placeholder="Enter Text for Info..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div className={style.info}>{info}</div>
      </div>
    </div>
  );
};

export default HomePage;
