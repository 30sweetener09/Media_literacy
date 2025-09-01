import "./SectionPage.css";
import LessonCard from "../Cards/LessonCard";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
const SectionPage = () => {
    const { sectionId } = useParams();

    return (
        <div className="section-page">
            <h1>Section 1: The basics</h1>
            <p>Hello everyone! Today, we’re going to learn the basics of this course: The truth, the difference between facts and opinions, and some little introduction to AI. </p>
            <p>Are you ready?</p>
            <p>Now let’s look at what we are going to learn.</p>
            <p><b> By the end of this lesson, you will be able to…</b></p>
            <ol>
                <li>Understand what “truth” means and why it matters in everyday life and online spaces.</li>
                <li>Learn to identify credible sources and misinformation.</li>
                <li>Develop skills to analyze media messages critically.</li>
                <li>Engage responsibly in digital and social media platforms.</li>
            </ol>

            <p><b> We will look into…</b></p>
            <ol>
                <li><b>What truth means:</b> We will find out what “truth” is and why it matters in our lives and on the internet.</li>
                <li><b>Why true information is important:</b> We will see how knowing the right information helps us stay safe and make good choices.</li>
                <li><b>Facts or opinions?:</b> We will learn how to tell the difference between a fact (something real) and an opinion (what someone thinks).</li>
                <li><b>What is AI?:</b> We will meet AI (Artificial Intelligence) and see how it can make pictures, stories, or videos, sometimes real, sometimes not!</li>
            </ol>
            <p>Let’s get started and have fun learning together!</p>

            <h2 className="lesson-section-title">Lessons in this section</h2>
            <Link to="/lesson/1" style={{ textDecoration: 'none', textDecorationColor: 'none', color: 'inherit' }}>
                <LessonCard title="Lesson 1: What Is Truth & Why Does It Matter?" />
            </Link>
            <Link to="/lesson/2" style={{ textDecoration: 'none', textDecorationColor: 'none', color: 'inherit' }}>
                <LessonCard title="Lesson 2: Facts and Opinions" />
            </Link>
            <Link to="/lesson/3" style={{ textDecoration: 'none', textDecorationColor: 'none', color: 'inherit' }}>
                <LessonCard title="Lesson 3: What is AI & Why Should We Be Careful?" />
            </Link>

        </div>
    );
}

export default SectionPage;