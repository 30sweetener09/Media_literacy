import './LessonPage.css';
import Scenario1 from './ScenarioL1/Scenario1';
import Scenario2 from './ScenarioL1/Scenario2';
import Scenario3 from './ScenarioL1/Scenario3';
import Scenario4 from './ScenarioL1/Scenario4';
import { Link } from 'react-router-dom';


const LessonPage1 = () => {
    return (
        <div className="lesson-page">
            <h1 className="lesson-title">Lesson 1: What Is Truth & Why Does It Matter?</h1>
            <p className="lesson-content">“Truth” means something that really happened or is real. It’s like knowing the answer to a question or what your eyes see when something is true, not made up.</p>
            <p className="lesson-content">So why does truth matters?</p>
            <h2 className="quiz-section-title">How would you feel when these things happen?</h2>
            <Scenario1 />

            <Scenario2 />
            <Scenario3 />
            <Scenario4 />

            <div className="next-lesson">
                <Link to="/lesson/2">
                    <button>Next Lesson</button>
                </Link>
            </div>
        </div>
    );
}
export default LessonPage1;
