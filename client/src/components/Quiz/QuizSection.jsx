import React, { useState } from 'react';
import DropDownQuiz from './DDQ/DropDownQuiz'
import FillBlankQuiz from './FBQ/FillBlankQuiz'
import MultipleChoiceQuiz from './MCQ/MultipleChoicesQuiz';

//ở dưới có ví dụ cho từng loại quiz
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


/* DropDownQuiz:
{
    "id": "q2",
    "type": "select",
    "description": "Classify each statement as a fact or an opinion.",
    "questions": [
      "It is 0 degrees outside.",
      "It is too cold outside.",
      "Water freezes at 0 degrees.",
      "Ice cream is the best dessert.",
      "Im the best.",
    ],
    "answers": ["Fact", "Opinion"],
    "correctAnswers": ["Fact", "Opinion", "Fact", "Opinion", "Opinion"],
    "canTryAgain": true
  },
*/

/* FillBlankQuiz:
{
    "id": "q3",
    "type": "fill-blank",
    "question": "The ___ is the largest planet in the ___ system. The second largest is __, just because.",
    "correctBlanks": ["Jupiter", "solar", "Saturn"],
    "correctAnswers": "The Jupiter is the largest planet in the solar system.",
    "canTryAgain": true
  },
  {
    "id": 'q4',
    "type": 'fill-blank',
    "question": 'The capital of France is ___.',
    "correctBlanks": ['Paris'],
    "correctAnswers": 'The capital of France is Paris'
  },
 */

  /* Multiple Choices Quiz
  {
    "id": "q1",
    "type": "multiple-choice",
    "question": "Những ngôn ngữ lập trình nào sau đây là ngôn ngữ lập trình hướng đối tượng?",
    "answers": ["JavaScript", "HTML", "CSS", "Python"],
    "correctAnswer": ["JavaScript", "Python"],
    "explanation": "JavaScript và Python đều là ngôn ngữ lập trình hướng đối tượng, trong khi HTML và CSS không phải.",
    "canTryagain": true
  },
  */