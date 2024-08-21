import React, { useEffect, useState } from "react";
import "./Quiz.css";
import Question from "../Question";

function Quiz({ name, score, questions, setQuestion, setScore }) {
  const [options, setOptions] = useState();
  const [currentQ, setCurrentQ] = useState(0);

  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQ]?.correct_answer,
          ...questions[currentQ]?.incorrect_answers,
        ])
    );
  }, [questions, currentQ]);

  //console.log(options);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currentQ].category}</span>
            <span>Score:{score}</span>
          </div>
          <Question
            currentQ={currentQ}
            setCurrentQ={setCurrentQ}
            options={options}
            questions={questions}
            setQuestion={setQuestion}
            correct={questions[currentQ]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <h3>loading...</h3>
      )}
    </div>
  );
}

export default Quiz;
