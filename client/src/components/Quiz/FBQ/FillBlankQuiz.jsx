import React, { useState } from 'react';
import './FillBlankQuiz.css'

const FillBlankQuiz = ({
    question,
    correctBlanks,
    onAnswer,
    canTryAgain = true,
    index = 0
}) => {
    const note = 'Fill in the blanks'
    const blanksCount = (question.match(/_{2,}/g) || []).length;
    const [inputValue, setInputValue] = useState(Array(blanksCount).fill(''));
    const [submitted, setSubmitted] = useState(false);
    const [correctArray, setCorrectArray] = useState([]);

    const handleChange = (index, value) =>{
        let newInputValue = [...inputValue];
        newInputValue[index] = value;
        setInputValue(newInputValue);
    }
    const handleSubmit = () => {
        if (inputValue.includes('')) return;

        const isCorrectArray = inputValue.map((value, i) =>
            value.trim().toLowerCase() === correctBlanks[i].trim().toLowerCase()
        );

        setCorrectArray(isCorrectArray);
        setSubmitted(true);

        const overallCorrect = isCorrectArray.every((v) => v);
        if (onAnswer) onAnswer(overallCorrect);
    }
    const handleTryagain = () => {
        setInputValue(Array(blanksCount).fill(''));
        setCorrectArray([]);
        setSubmitted(false);
    }

    return (
        <div className='quiz-container'>
            <h3>Question {index + 1}: {note}</h3>
            <p>{question}</p>
            <>
                {Array.from({ length: blanksCount }).map((_, i) => {
                    const showIcon = submitted;
                    const correct = correctArray[i];
                    return(
                        <>
                        <label key={`input-${i}`} style={{ display: 'block', marginBottom: '12px' }}>
                            {`(${i+1}):`}
                            <input
                                type='text'
                                value={inputValue[i]}
                                onChange={(e) => {handleChange(i, e.target.value)}} 
                                disabled={submitted}
                                style={{ marginLeft: '8px', marginRight: '8px'}}
                            />
                            {showIcon && (
                                <span style={{ color: correct ? 'green' : 'red' }}>
                                    {correct ? '✅' : '❌'}
                                </span>
                            )}
                        </label>
                        </>
                    )
                })}
            </>
            <hr/>
            {!submitted ? (
            <button 
                className='submit-button' 
                onClick={handleSubmit} 
                disabled={inputValue.includes('')}
            >
                Submit
            </button>
            ) : (
            <div>
                
                {(submitted && correctArray.every(Boolean))? (
                    <p className='note'>Correct, You understand the lesson! </p>
                ):(
                    <div>
                        <p className='note'>Incorrect, please try again!</p>
                        <p>The correct answer is: </p>
                        {correctBlanks.map((value, i) => {
                            return(
                                <div key={i} style={{ display: 'block', marginBottom: '10px' }}>
                                    <span>{`(${i + 1}): ${value}`}</span>
                                </div>
                            )
                        })}

                        {canTryAgain && (
                        <button 
                            className='try-again-button' 
                            onClick={handleTryagain}
                        >
                            Try Again
                        </button>
                    )}
                    </div>
                )}
            </div>
            )}
        </div>
    )
}

export default FillBlankQuiz;