import React, { useState } from 'react';
import MultipleChoicesQuiz from '../../../Quiz/MCQ/MultipleChoicesQuiz';

const Scenario3 = () => {

    const [answers, setAnswers] = useState({}); // lưu trạng thái đúng/sai của từng câu

const handleAnswer = (isCorrect, index) => {
  setAnswers((prev) => {
    const updated = { ...prev, [index]: isCorrect };
    console.log(Object.values(updated)); // log ra đúng state mới
    return updated;
  });
};


  // kiểm tra cả 2 câu đã đúng chưa
  const allCorrect = Object.values(answers).length === 2 && 
                     Object.values(answers).every((v) => v == true);


    const questions = [
        {
            id: 1,
            question: "A fact can be checked to see if it is true.",
            answers: [
                "True",
                "False"
            ],
            correctAnswer: "True"
        },
        {
            id: 2,
            question: "An opinion is always right for everyone.",
            answers: [
                "True",
                "False"
            ],
            correctAnswer: "False"
        }
    ];

    return (
        <div className="scenario-container">
            <div className="scenario-img">
                <h2>Quick check: True or False?</h2>
            </div>

            <div className="quiz-content-container">
                {questions.map((q) => (
                    <MultipleChoicesQuiz
                        key={q.id}
                        index={q.id - 1}
                        question={q.question}
                        answers={q.answers}
                        correctAnswer={q.correctAnswer}
                        onAnswer={(selected) => handleAnswer(selected, q.id)}
                    />
                ))}

                {allCorrect && (
                    <div className="final-message">
                        <p>
                           Do you still remember what facts and opinions are? Let’s check for the last time.
                        </p>
                    </div>
                )}
            </div>


        </div>
    );
};



export default Scenario3;