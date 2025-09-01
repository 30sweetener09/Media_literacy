import './LessonPage.css';
import { Link } from 'react-router-dom';
import MultipleChoiceQuiz from '../../Quiz/MCQ/MultipleChoicesQuiz';
import Scenario1 from './ScenarioL3/Scenario1';
import Scenario2 from './ScenarioL3/Scenario2';
import Scenario3 from './ScenarioL3/Scenario3';
const LessonPage3 = () => {
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

            <div className="next-lesson">
                <Link to="/lesson/3">
                    <button>Next Lesson</button>
                </Link>
            </div>
        </div>
    );
}
export default LessonPage3;
