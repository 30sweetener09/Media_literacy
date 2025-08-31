import './NavigationBar.css';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
  return (
    <nav>
      <ul className="navigation-bar">
        <Link to="/"><li className="navigation-item">HOME</li></Link>
        <Link to="/about"><li className="navigation-item">ABOUT</li></Link>
        <Link to="/contact"><li className="navigation-item">CONTACT</li></Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
