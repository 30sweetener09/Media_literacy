import './Homepage.css';
import SectionCard from '../Cards/SectionCard';

const Homepage = () => {
    return (
        <>
            <div className="banner">
                <div className="banner-text">
                    <h1 className="banner-title">Media Information Literacy</h1>
                    <h3 className="banner-subtitle">Empowering Critical Thinking in the Digital Age</h3>
                </div>
            </div>

            <div className="content">
                <section className="intro-section">
                    <h1>Welcome to Media Literacy</h1>
                    <p>In today's digital age, media literacy is more important than ever. Our mission is to empower individuals with the skills and knowledge needed to critically evaluate and engage with media content.</p>
                </section>
                <section className="features-section">
                    <h1>What We Offer</h1>
                    <ul className="features-list">
                        <li>Comprehensive resources on media literacy</li>
                        <li>Interactive workshops and webinars</li>
                        <li>Community forums for discussion and support</li>
                        <li>Up-to-date news and articles on media trends</li>
                    </ul>
                </section>
                <div className="section-list">
                    <SectionCard imgURL="https://artprojectsforkids.org/wp-content/uploads/2024/01/Draw-a-Penguin-web.jpg" title="Section 1: The basics" description={["Understand what “truth” means and why it matters in everyday life and online spaces.",
                        "Learn to identify credible sources and misinformation.",
                        "Develop skills to analyze media messages critically.",
                        "Engage responsibly in digital and social media platforms."]} />

                    <SectionCard imgURL="https://artprojectsforkids.org/wp-content/uploads/2024/01/Draw-a-Penguin-web.jpg" title="Section 1: The basics" description={["Understand what “truth” means and why it matters in everyday life and online spaces.",
                        "Learn to identify credible sources and misinformation.",
                        "Develop skills to analyze media messages critically.",
                        "Engage responsibly in digital and social media platforms."]} />

                    <SectionCard imgURL="https://artprojectsforkids.org/wp-content/uploads/2024/01/Draw-a-Penguin-web.jpg" title="Section 1: The basics" description={["Understand what “truth” means and why it matters in everyday life and online spaces.",
                        "Learn to identify credible sources and misinformation.",
                        "Develop skills to analyze media messages critically.",
                        "Engage responsibly in digital and social media platforms."]} />
                    <SectionCard imgURL="https://artprojectsforkids.org/wp-content/uploads/2024/01/Draw-a-Penguin-web.jpg" title="Section 1: The basics" description={["Understand what “truth” means and why it matters in everyday life and online spaces.",
                        "Learn to identify credible sources and misinformation.",
                        "Develop skills to analyze media messages critically.",
                        "Engage responsibly in digital and social media platforms."]} />

                    <SectionCard imgURL="https://artprojectsforkids.org/wp-content/uploads/2024/01/Draw-a-Penguin-web.jpg" title="Section 1: The basics" description={["Understand what “truth” means and why it matters in everyday life and online spaces.",
                        "Learn to identify credible sources and misinformation.",
                        "Develop skills to analyze media messages critically.",
                        "Engage responsibly in digital and social media platforms."]} />
                        
                </div>
            </div>
        </>

    );
}

export default Homepage;
