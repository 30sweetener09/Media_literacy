import './SectionCard.css';
const SectionCard = ({ imgURL, title, description }) => {
  return (
    <div className="section-card">
      <img src={imgURL} alt="Section" className="section-image" />
      <div className="section-content">
        <h2>{title}</h2>
        <ul>
          <li>{description[0]}</li>
          <li>{description[1]}</li>
          <li>{description[2]}</li>
          <li>{description[3]}</li>

        </ul>
      </div>

    </div>
  );
}

export default SectionCard;
