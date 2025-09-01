import './LessonPage.css';
import { Link } from 'react-router-dom';
import MultipleChoiceQuiz from '../../Quiz/MCQ/MultipleChoicesQuiz';
import Scenario1 from './ScenarioL2/Scenario1';
import Scenario2 from './ScenarioL2/Scenario2';
import Scenario3 from './ScenarioL2/Scenario3';
import FlashCardSection from '../../Cards/FlashCardSection';
const LessonPage2 = () => {

    const flashcards = [
        { frontSide: 'What is a Fact?', backSide: 'Something we can check and prove to be true.', id: 1 },
        { frontSide: 'What is an Opinion?', backSide: 'What someone thinks or feels; it may be different for others.', id: 2 },
    ];
    return (
        <div className="lesson-page">
            <h1 className="lesson-title">Lesson 2:  Facts and Opinions</h1>
            <p className="lesson-content"> <b>Facts</b> are things we can check to see if they are true.</p>
            <p className="lesson-content"> <b>Opinions</b> are what someone thinks or feels, and different people might think differently.</p>
            <p className="lesson-content">Learning to tell them apart helps us know what is real and what is just someone’s personal view.</p>
            <h2 className="quiz-section-title">We will play a game! You will see a sentence. You must decide: Is it a fact or an opinion?</h2>
            <Scenario1 />

            <Scenario2 />

            <Scenario3 />

            <h2>Flashcards for Wrap-Up</h2>
            <FlashCardSection flashcards={flashcards} index={0} />

            <div className="next-lesson">
                <Link to="/lesson/3">
                    <button>Next Lesson</button>
                </Link>
            </div>
        </div>
    );
}
export default LessonPage2;
