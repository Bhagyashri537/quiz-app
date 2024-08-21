import React, { useState } from "react";
import "./Question.css";
import { useNavigate } from "react-router-dom";

function Question({
  currentQ,
  setCurrentQ,
  options,
  questions,
  setQuestion,
  correct,
  score,
  setScore,
}) {
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSelected = (op) => {
    if (selected === op && selected === correct) {
      return "select";
    } else if (selected === op && selected !== correct) {
      return "wrong";
    } else if (op === correct) {
      return "select";
    }
    return "";
  };

  const handleCheck = (op) => {
    setSelected(op);
    if (op === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currentQ === questions.length - 1) {
      navigate('/result');
    } else if (selected) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setError('Please select an option first');
    }
  };

  const handleQuit = () => {
    navigate('/');
  };

  return (
    <div className="question">
      <h1>Question {currentQ + 1}</h1>
      <div className="singleQ">
        <h2>{questions[currentQ].question}</h2>
        <div className="options">
          {error && <h4>{error}</h4>}
          {options &&
            options.map((op) => (
              <button
                onClick={() => handleCheck(op)}
                className={`singleOption ${selected && handleSelected(op)}`}
                key={op}
                disabled={!!selected}
              >
                {op}
              </button>
            ))}
        </div>
        <div className="controls">
          <button onClick={handleQuit}>Quit</button>
          <button onClick={handleNext}>Next Question</button>
        </div>
      </div>
    </div>
  );
}

export default Question;
