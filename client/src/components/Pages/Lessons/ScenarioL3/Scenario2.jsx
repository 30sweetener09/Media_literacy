import React, { useState } from 'react';
import FillBlankQuiz from '../../../Quiz/FBQ/FillBlankQuiz';

const Scenario2 = () => {

    const [answers, setAnswers] = useState({}); // lưu trạng thái đúng/sai của từng câu

    const handleAnswer = (isCorrect, index) => {
        setAnswers((prev) => ({ ...prev, [index]: isCorrect }));
    }
    

    // kiểm tra cả 2 câu đã đúng chưa
    const allCorrect = Object.values(answers).length === 5 &&
        Object.values(answers).every((v) => v == true);


    const questions = [
        {
            id: 0,
            question:
                "Artificial Intelligence (AI) is when computers and machines can do smart things, like a ________ brain.",
            correctBlanks: ["human"],
        },
        {
            id: 1,
            question:
                "AI can read and understand ________, find answers, and learn new things.",
            correctBlanks: ["language"],
        },
        {
            id: 2,
            question:
                "An audience is a group of people who watch, listen, or read something. They can be different in ________ (how old they are) and ________ (boys, girls, or others). They don’t just watch; they can also share ideas",
            correctBlanks: ["age", "gender"],
        },
        {
            id: 3,
            question:
                "Large Language Models (LLMs): These are very smart computer programs that read lots of words (called ________) to learn how to write, talk, or answer questions in a human-like way.",
            correctBlanks: ["datasets"],
        },
        {
            id: 4,
            question:
                "Generative Artificial Intelligence (GAI) is AI that can make new things, like stories, songs, or ________.",
            correctBlanks: ["images"],
        }
    ];

    return (
        <div className="scenario-container" style={{display: 'block'}}>
            <div className="scenario-instruction" style={{padding: '12px', }}>
                <h3>Fill in the blanks with the correct words to complete the sentences about AI.</h3>
                <div className="answer-list">
                    <strong>Word Bank:</strong>  language, human, creative, datasets, age, images, gender
                </div>
            </div>


            <div className="quiz-content-container">
                {questions.map((q) => (
                        <FillBlankQuiz
                            key={q.id}
                            question={q.question}
                            correctBlanks={q.correctBlanks} 
                            onAnswer={(isCorrect) => handleAnswer(isCorrect, q.id)}
                            index={q.id}
                            canTryAgain={true}
                        />

                ))}

                {allCorrect && (
                    <div className="final-message">
                        <p>
                            You’re doing great so far! Now, let’s wrap up!
                        </p>
                    </div>
                )}
            </div>


        </div>
    );
};



export default Scenario2;