import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Quiz from "./components/Pages/Quiz";
import Result from "./components/Pages/Result";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category ? `&category=${category}` : ""
      }${difficulty ? `&difficulty=${difficulty}` : ""}&type=multiple`
    );
    setQuestion(data.results);
    
  };
  

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }
            />
            <Route path="/quiz" element={<Quiz name={name} questions={question} score={score} setScore={setScore} setQuestion={setQuestion}/>} />
            <Route path="/result" element={<Result name={name} score={score} />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
