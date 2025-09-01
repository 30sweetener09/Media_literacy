import React, { useState } from 'react';
import MultipleChoicesQuiz from '../../../Quiz/MCQ/MultipleChoicesQuiz';

const Scenario2 = () => {

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
            id: 0,
            scenario: "Scenario 1 – Checking What’s Real",
            question:
                "Imagine you see this sentence online: “Pandas are the cutest animals in the world.” Is this a fact or opinion?",
            answers: [
                "Fact – it can be checked and proven.",
                "Opinion – it shows what someone thinks."
            ],
            correctAnswer: "Opinion – it shows what someone thinks.",
            imgURL:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/960px-Grosser_Panda.JPG"
        },
        {
            id: 1,
            scenario: "Scenario 2 – Learning Why It Matters",
            question:
                "Imagine you read: “Drinking water helps you stay healthy.” Is this a fact or opinion?",
            answers: [
                "Fact – it can be checked by science.",
                "Opinion – someone’s personal feeling."
            ],
            correctAnswer: "Fact – it can be checked by science.",
            imgURL:
                "https://cdn.britannica.com/32/234332-050-3D26CD41/woman-drinking-glass-of-water-hydration.jpg"
        },
    ];

    return (
        <div className="scenario-container">

            <div className="quiz-content-container">
                {questions.map((q) => (
                    <div key={q.id}>
                        <h2>{q.scenario}</h2>
                        <MultipleChoicesQuiz
                            index={q.id}
                            question={q.question}
                            answers={q.answers}
                            correctAnswer={q.correctAnswer}
                            onAnswer={(selected) => handleAnswer(selected, q.id)}
                            imgURL={q.imgURL}
                        />
                    </div>
                ))}

                {allCorrect && (
                    <div className="final-message">
                        <p>
                             And some final thoughts to end the lesson…
                             <p></p>What happens if we mix up facts and opinions?
                             <p>We may believe things that are not real.</p>
                             <p>We may argue about things that can’t be proven.</p>
                             <p>We may miss important real information.</p>
                             <p>So remember, always think if it’s a fact or an opinion.</p>

                        </p>
                    </div>
                )}
            </div>


        </div>
    );
};



export default Scenario2;