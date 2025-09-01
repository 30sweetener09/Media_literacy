import React, { useState } from 'react';
import MultipleChoicesQuiz from '../../../Quiz/MCQ/MultipleChoicesQuiz';

const Scenario2 = () => {

    const [answers, setAnswers] = useState({}); 

const handleAnswer = (isCorrect, index) => {
  setAnswers((prev) => {
    const updated = { ...prev, [index]: isCorrect };
    console.log(Object.values(updated)); 
    return updated;
  });
};

  const allCorrect = Object.values(answers).length === 2 && 
                     Object.values(answers).every((v) => v == true);


    const questions = [
        {
            id: 1,
            question: "If they follow this without checking, what might happen?",
            answers: [
                "They could feel sick or weak.",
                "They will run faster for sure.",
                "They will win a medal right away.",
                "Nothing will happen to them."
            ],
            correctAnswer: "They could feel sick or weak."
        },
        {
            id: 2,
            question: " If you check the information and share the truth with your friend, what happens?",
            answers: [
                "They will not like you anymore.",
                "You help them stay healthy.",
                "They will believe wrong things.",
                "It doesn’t change anything."
            ],
            correctAnswer: "You help them stay healthy."
        }
    ];

    return (
        <div className="scenario-container">
            <div className="scenario-img">
                <p className='quiz-scenario'>
                    <b>Imagine,</b> your friend reads a post saying eating only candy will make them run faster in sports.
                </p>
                <img
                    src="https://www.ubiquinol.net.au/wp-content/uploads/2018/07/iStock-545444274.jpg"
                    alt="Scenario Illustration"
                />
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
                            When we know the truth, we make better choices, help others, and
                            feel safe.
                        </p>
                        <p>
                            Understanding truth and sticking to it helps us think smart and be
                            fair to everyone.
                        </p>
                    </div>
                )}
            </div>


        </div>
    );
};



export default Scenario2;