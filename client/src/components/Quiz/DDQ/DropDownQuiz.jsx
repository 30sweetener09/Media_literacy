import React, { useState } from 'react';
import './DropDown.css';

const DropDownQuiz = ({
    description, //a description of the quiz
    questions, //a list of question
    answers,
    correctAnswers, //a list of answers
    onAnswer,
    index = 0,
    canTryAgain = true,
}) => {
    const note = "Select one answer for each statement"
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));
    const [submitted, setSubmitted] = useState(false);
    
    const handleAnswerChange = (qIndex, e) => {
        if (submitted) return;
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[qIndex] = e.target.value;
        setSelectedAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        if (selectedAnswers.includes('')) {
            alert('Please answer all questions');
            return;
        }
        const correctCount = selectedAnswers.reduce((count, answer, i) =>
            answer === correctAnswers[i] ? count + 1 : count
        , 0);
        setSubmitted(true);
        onAnswer(correctCount, selectedAnswers.length);
    };
    const handleTryagain = () => {
        setSubmitted(false);
        setSelectedAnswers(Array(questions.length).fill(''));
    }
    const hasIncorrectAnswers = submitted && selectedAnswers.some(
        (answer, i) => answer !== correctAnswers[i]
    );

    return (
        <div className="quiz-container">
            <h3>Question {index + 1}: {description}</h3>
            <span className='note'>{note}</span>
            <table className="quiz-table">
                <thead>
                    <tr>
                        <th style={{textAlign: 'center' }}>Statements</th>
                        <th style={{textAlign: 'center' }}>Answers</th>
                        {submitted && <th style={{textAlign: 'center' }}>Result</th>}
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, qIndex) => (
                        <tr key={qIndex}>
                            <td style={{textAlign: 'left' }}>
                                {qIndex + 1}. {question}
                            </td>

                            <td style={{ padding: '4px' , textAlign: 'center' }}>
                                <select 
                                    value={selectedAnswers[qIndex]}
                                    onChange={(e) => handleAnswerChange(qIndex, e)}
                                    disabled={submitted}>
                                    
                                    <option value="" disabled>-- Choose one answer --</option>
                                    {answers.map((answer, aIndex) => (
                                        <option key={aIndex} value={answer}>
                                            {answer}
                                        </option>
                                    ))}
                                </select>
                            </td>

                            {submitted && (
                            <td style={{ padding: '8px' , textAlign: 'center' }}>
                                {selectedAnswers[qIndex] === correctAnswers[qIndex] ? '✅' : '❌'}
                            </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <p> </p>

            {!submitted ? (
            <button 
                className='submit-button' 
                onClick={handleSubmit} 
                disabled={submitted || selectedAnswers.includes('')}
            >
                Submit
            </button>
            ):(
                canTryAgain && (hasIncorrectAnswers? (
                    <button 
                        className='try-again-button' 
                        onClick={handleTryagain} 
                    >
                        Try Again
                    </button>
                ):(
                    <h3 className='note'>You understood the lesson!</h3>
                ))
            )}
        </div>
    )
};

export default DropDownQuiz;