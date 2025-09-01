import React, { useState } from "react";
import "./MultipleChoicesQuiz.css";

const MultipleChoiceQuiz = ({
  question,
  answers = [],
  correctAnswer,
  index = 0,
  imgURL,
  onAnswer, // callback gửi kết quả lên cha
}) => {
  const note = "Choose one answer";

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleSelect = (option) => {
    setSelectedAnswer(option);

    if (option === correctAnswer) {
      setFeedback("You understood the lesson!");
      onAnswer?.(true, index); // báo cha: câu này đúng
    } else {
      setFeedback("Please try again…");
      onAnswer?.(false, index); // báo cha: câu này sai
    }
  };

  const getOptionStyle = (answer) => {
    if (!selectedAnswer) return {};
    if (answer === selectedAnswer) {
      return answer === correctAnswer
        ? { backgroundColor: "#d4edda", borderColor: "#28a745" } // xanh
        : { backgroundColor: "#f8d7da", borderColor: "#dc3545" }; // đỏ
    }
    return {};
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h3>
          Question {index + 1}: {question}
        </h3>
        <p className="note">{note}</p>

        <div className="options">
          {answers.map((answer, i) => (
            <div
              key={i}
              className={`quiz-option ${selectedAnswer === answer ? "selected" : ""}`}
              style={getOptionStyle(answer)}
              onClick={() => handleSelect(answer)}
            >
              {answer}
            </div>
          ))}
        </div>

        {feedback && (
          <p
            className={`feedback ${
              feedback.includes("understood") ? "correct" : "wrong"
            }`}
          >
            {feedback}
          </p>
        )}
      </div>

      {imgURL && (
        <div className="quiz-image">
          <img src={imgURL} alt="Quiz Illustration" />
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceQuiz;
