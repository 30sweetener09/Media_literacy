import React, { useState } from 'react';
import MultipleChoicesQuiz from '../../../Quiz/MCQ/MultipleChoicesQuiz';

const Scenario1 = () => {

    const [answers, setAnswers] = useState({}); // lưu trạng thái đúng/sai của từng câu

    const handleAnswer = (isCorrect, index) => {
        setAnswers((prev) => {
            const updated = { ...prev, [index]: isCorrect };
            console.log(Object.values(updated)); // log ra đúng state mới
            return updated;
        });
    };


    // kiểm tra cả 2 câu đã đúng chưa
    const allCorrect = Object.values(answers).length === 1 &&
        Object.values(answers).every((v) => v == true);


    const questions = [
        {
            id: 0,
            question:
                "Imagine, you ask an AI chatbot to write a story about dinosaurs. It says: “Dinosaurs still live in the jungle today.” What should you do?",
            answers: [
                "Believe it right away.",
                "Check a science website or book to see if it’s true.",
                "Tell all your friends dinosaurs are still alive."
            ],
            correctAnswer: "Check a science website or book to see if it’s true.",
            imgURL:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/960px-Grosser_Panda.JPG"
        },
    ];

    return (
        <div className="scenario-container">

            <div className="quiz-content-container">
                {questions.map((q) => (
                        <MultipleChoicesQuiz
                            index={q.id}
                            question={q.question}
                            answers={q.answers}
                            correctAnswer={q.correctAnswer}
                            onAnswer={(selected) => handleAnswer(selected, q.id)}
                            imgURL={q.imgURL}
                        />
                ))}

                {allCorrect && (
                    <div className="final-message">
                        <p>
                             Very good, now let’s look at some more difficult ideas. Let’s see, can you finish the senteces on your own?
                        </p>
                    </div>
                )}
            </div>


        </div>
    );
};



export default Scenario1;