import React, { useState } from 'react';
import MultipleChoicesQuiz from '../../../Quiz/MCQ/MultipleChoicesQuiz';

const Scenario3 = () => {

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
            question: "If you believe it right away, what could happen?",
            answers: [
                "You might cancel plans for no reason and feel scared.",
                "You will always be safe.",
                "The weather will definitely be bad.",
                "You will get a prize for staying inside."
            ],
            correctAnswer: "You might cancel plans for no reason and feel scared."
        },
        {
            id: 2,
            question: "What do we learn about truth from this?",
            answers: [
                "Checking the information helps us feel safe and know what’s real.",
                "It’s better to believe any message online.",
                "Being scared is fun.",
                "Truth is not important for safety."
            ],
            correctAnswer: "Checking the information helps us feel safe and know what’s real."
        }
    ];

    return (
        <div className="scenario-container">
            <div className="scenario-img">
                <p className='quiz-scenario'>
                    <b>Imagine,</b> you see a message saying there’s a dangerous storm coming tomorrow, but it’s not from a trusted source.</p>
                <img
                    src="https://www.timeforkids.com/wp-content/uploads/2018/08/Storms-Images.jpg"
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



export default Scenario3;