import React, { useState } from "react";
import Img from "../../assets/title.jpg";
import "./Home.css";
import Categories from "../Data/Categories";
import { useNavigate } from "react-router-dom";

function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !name) {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(category, difficulty)
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="title">
        <span style={{ fontSize: 30, fontWeight: 400 }}>
          Let's Play & Learn
        </span>
        <div className="settings">
          {error && <p style={{ color: "red" }}>Please fill in all fields</p>}
          <input
            type="text"
            placeholder="Enter Your Name"
            className="inputfield"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            id="options"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="category"
          >
            <option value="" disabled>
              Select category
            </option>
            {Categories.map((cat, index) => (
              <option key={index} value={cat.value}>
                {cat.category}
              </option>
            ))}
          </select>
          <select onChange={(e) => setDifficulty(e.target.value)} value={difficulty} className="category">
          <option value="" disabled>Select Difficulty</option>
  <option value="easy">Easy</option> 
  <option value="medium">Medium</option> 
  <option value="hard">Hard</option>
          </select>
          <button className="btn" onClick={handleSubmit}>
            Let's Start
          </button>
        </div>
      </div>
      <img src={Img} className="img" alt="Title" />
    </div>
  );
}

export default Home;
