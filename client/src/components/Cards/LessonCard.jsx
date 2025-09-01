import './LessonCard.css';

const LessonCard = ({title}) => {
    return (
        <div className="lesson-card">
            <h3>{title}</h3>
        </div>
    );
}

export default LessonCard;
