import './LessonPage.css';
import { Link } from 'react-router-dom';
import MultipleChoiceQuiz from '../../Quiz/MCQ/MultipleChoicesQuiz';
import Scenario1 from './ScenarioL3/Scenario1';
import Scenario2 from './ScenarioL3/Scenario2';
import Scenario3 from './ScenarioL3/Scenario3';
import FlashCardSection from '../../Cards/FlashCardSection';
const LessonPage3 = () => {
    const flashcards = [
        { id: 1, frontSide: "What is AI?", backSide: "A computer brain that can make text, pictures, and more; but needs checking!" },
        { id: 2, frontSide: "Why check AI information?", backSide: "Because it can be wrong, and we want to know what’s real." },
        { id: 3, frontSide: "Artificial Intelligence (AI) is when computers and machines can do smart things, like a ________ brain.", backSide: "human" },
        { id: 4, frontSide: "They can read and understand ________, find answers, and learn new things.", backSide: "language" },
        { id: 5, frontSide: "Audiences can be different in ________ (how old they are) and ________ (boys, girls, or others).", backSide: "age; gender" },
        { id: 6, frontSide: "Large Language Models (LLMs) read lots of words (called ________) to learn how to write, talk, or answer questions.", backSide: "datasets" },
        { id: 7, frontSide: "Generative AI can make new things, like stories, songs, or ________.", backSide: "pictures; images" },
    ];

    return (
        <div className="lesson-page">
            <h1 className="lesson-title">Lesson 3:  What is AI & Why Should We Be Careful?</h1>
            <img className="lesson-image" src="https://mesh.vn/storage/2021/07/AI.jpg" alt="Lesson" />
            <p className="lesson-content"> AI (Artificial Intelligence) is like a computer brain. It can read, write, draw pictures, and even make videos, almost like a helper. But remember, AI is not human. It only learns from information people give it, and sometimes it can get things wrong.</p>
            <p className="lesson-content"> So what can AI do?</p>
            <p className="lesson-content">AI can help us create fun stories, images, and ideas.</p>
            <p className="lesson-content">But if AI gives wrong information, it can spread false facts.</p>
            <p className="lesson-content">That’s why we need to check the truth, just like we learned in the last lessons!</p>
            <h2 className="quiz-section-title">Now let’s play a Game: What Would You Do?</h2>
            <Scenario1 />

            <h2>Fill in the blank</h2>
            <Scenario2 />


            <Scenario3 />


            <h2>Flashcards for Wrap-Up</h2>

            <FlashCardSection flashcards={flashcards} index={0} title="AI Basics" />
            
            <div className="next-lesson">
                <Link to="/lesson/3">
                    <button>Next Lesson</button>
                </Link>
            </div>
        </div>
    );
}
export default LessonPage3;
