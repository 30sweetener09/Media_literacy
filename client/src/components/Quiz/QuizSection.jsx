import React, { useState } from 'react';
import DropDownQuiz from './DDQ/DropDownQuiz'
import FillBlankQuiz from './FBQ/FillBlankQuiz'
import MultipleChoiceQuiz from './MCQ/MultipleChoicesQuiz';

const QuizRenderer = ({ questionData, index, onAnswer }) => {
  switch (questionData.type) {
    case 'fill-blank':
      return <FillBlankQuiz {...questionData} index={index} onAnswer={onAnswer} />;
    case 'multiple-choice':
      return <MultipleChoiceQuiz {...questionData} index={index} onAnswer={onAnswer} />;
    case 'select':
      return <DropDownQuiz {...questionData} index={index} onAnswer={onAnswer} />;
    default:
      return <p style={{ color: 'red' }}>Unsupported question type: {questionData.type}</p>;
  }
};

const QuizSection = ({
    title, 
    description, 
    questions
}) => {
    const [score, setScore] = useState(0);
    const handleAnswer = (index, isCorrect) => {
        console.log(`Question ${index + 1}: ${isCorrect ? '✔️' : '❌'}`);
        if (isCorrect) {
        setScore(prev => prev + 1);
        }
    };
    
    return (
        <div className="quiz-section">
            <h2 className="quiz-title">{title}</h2>
            <p className="quiz-description">{description}</p>

            {questions.map((q, i) => (
                <div key={q.id || i} className="quiz-question">
                <QuizRenderer
                    questionData={q}
                    index={i}
                    onAnswer={(isCorrect) => handleAnswer(i, isCorrect)}
                />
                
                </div>
            ))}
            <p className='quiz-score'>Total Score: {score} / {questions.length}</p>
        </div>
    )
}
export default QuizSection;