import React, { useState } from 'react';
import './MultipleChoicesQuiz.css';

const MultipleChoiceQuiz = ({ 
    question, 
    answers, 
    correctAnswer, 
    onAnswer,
    index,
    canTryagain = true,
}) => {
    const note = "Choose one or more answers"
    const [selectedAnswer, setSelectedAnswers] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleAnswerChange = (option) => {
        if (submitted) return;
        let updatedAnswers;
        if (selectedAnswer.includes(option)) {
            updatedAnswers = selectedAnswer.filter(ans => ans !== option);
        } else {
            updatedAnswers = [...selectedAnswer, option];
        }
        setSelectedAnswers(updatedAnswers);
    }
    const handleSubmit = () => {
        if (selectedAnswer.length === 0) return;
        setSubmitted(true);
        const isCorrect = selectedAnswer.length === correctAnswer.length && 
                          selectedAnswer.every(ans => correctAnswer.includes(ans));
        onAnswer(isCorrect);
    }
    const handleTryagain = () => {
        setSubmitted(false);
        setSelectedAnswers([]);
    }
    const isCorrect = selectedAnswer.length === correctAnswer.length && selectedAnswer.every(ans => correctAnswer.includes(ans))
    

    return (
        <div className="quiz-container">
            
            <h3>Question {index + 1}: {question}</h3>
            <p className='note'>{note}</p>
            <div className="options">
                {answers.map((ans, index) => {
                const isSelected = selectedAnswer.includes(ans);
                const isCorrectAnswer = correctAnswer.includes(ans);
                const showCorrect = submitted && isCorrectAnswer;
                const showIncorrect = submitted && isSelected && !isCorrectAnswer;

                return (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <input 
                            type="checkbox"
                            id={`option-${index}`}
                            value={ans}
                            checked={isSelected}
                            onChange={() => handleAnswerChange(ans)}
                            disabled={submitted}
                        />
                        <label htmlFor={`option-${index}`}>{ans}</label>

                        {/* Show ✅ or ❌ if submitted */}
                        {showCorrect && <span style={{ color: 'green' }}>✅</span>}
                        {showIncorrect && <span style={{ color: 'red' }}>❌</span>}
                    </div>
                );
            })}
            </div>
            <p></p>
            {!submitted ? (
            <button 
                className='submit-button' 
                onClick={handleSubmit} 
                disabled={selectedAnswer.length === 0}
            >
                Submit
            </button>
            ) : (
            <>
                {selectedAnswer.length > 0 && 
                <>
                    {canTryagain ?(
                    <> 
                        {isCorrect? (
                            <>
                                <p className='note'>Correct, You understand the lesson! </p>
                            </>
                        ):(
                            <>
                                <p className='note'>Incorrect, please try again!</p>
                                <button
                                    className="try-again-button"
                                    onClick={handleTryagain}
                                >
                                    Try Again
                                </button>
                            </>

                        )}
                    </>
                    ):(
                        <p>{isCorrect ? '✅' : '❌'}</p>
                    )}
                </>
                }
            </>
            )}
        </div>      
    )
};
export default MultipleChoiceQuiz;