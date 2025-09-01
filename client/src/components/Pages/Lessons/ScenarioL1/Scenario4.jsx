import React, { useState } from 'react';
import MultipleChoicesQuiz from '../../../Quiz/MCQ/MultipleChoicesQuiz';

const Scenario4 = () => {

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
            question: "Truth is something that is real and real things help us make good choices.",
            answers: [
                "True",
                "False"
            ],
            correctAnswer: "True"
        },
        {
            id: 2,
            question: "It doesn't matter if something is true before sharing it online.",
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
                           Always choose the truth, because it keeps us safe and fair.
                        </p>
                    </div>
                )}
            </div>


        </div>
    );
};



export default Scenario4;