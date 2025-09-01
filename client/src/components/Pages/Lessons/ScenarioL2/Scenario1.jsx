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
    const allCorrect = Object.values(answers).length === 6 &&
        Object.values(answers).every((v) => v == true);


    const questions = [
        {
            id: 0,
            question: "It is 0 degrees outside.",
            answers: ["Fact", "Opinion"],
            correctAnswer: "Fact",
            imgURL:
                "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=612x612&w=0&k=20&c=jOZH4RSlX29thO6GNlvTUlYKUo_DK4xVxvXUTK7Jw5s=",
        },
        {
            id: 1,
            question: "It is too cold outside.",
            answers: ["Fact", "Opinion"],
            correctAnswer: "Opinion",
            imgURL:
                "https://i0.wp.com/www.syracusewomanmag.com/wp-content/uploads/2018/12/cold-1284028_1920.jpg?fit=1920%2C1214&ssl=1",
        },
        {
            id: 2,
            question: "Water freezes at 0 degrees.",
            answers: ["Fact", "Opinion"],
            correctAnswer: "Fact",
            imgURL: "https://static.toiimg.com/photo/72334001.cms",
        },
        {
            id: 3,
            question: "Ice cream is the best dessert.",
            answers: ["Fact", "Opinion"],
            correctAnswer: "Opinion",
            imgURL: "https://becs-table.com.au/wp-content/uploads/2014/01/ice-cream-1.jpg",
        },
        {
            id: 4,
            question: "The Eiffel Tower is in France.",
            answers: ["Fact", "Opinion"],
            correctAnswer: "Fact",
            imgURL:
                "https://cdn.britannica.com/31/255531-050-B7E07090/eiffel-tower-paris-france-champ-de-mars-view.jpg",
        },
        {
            id: 5,
            question: "France has the most beautiful landmarks.",
            answers: ["Fact", "Opinion"],
            correctAnswer: "Opinion",
            imgURL:
                "https://www.welcometofrance.com/app/uploads/2019/12/alexander-kagan-t9Td0zfDTwI-unsplash-1920x1280.jpg",
        },
    ];

    return (
        <div className="scenario-container">

            <div className="quiz-content-container">
                {questions.map((q) => (
                    <MultipleChoicesQuiz
                        key={q.id}
                        index={q.id }
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
                            Now let’s see if you really understand it with some imagination. 
                        </p>
                    </div>
                )}
            </div>


        </div>
    );
};



export default Scenario1;