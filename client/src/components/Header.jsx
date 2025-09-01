import NavigationBar from "./NaviationBar";
import './Header.css';
import MILlogo from '../assets/MIL.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img className="logo-image" src={MILlogo} alt="Logo" />
      </div>
      <NavigationBar />
    </header>
  );
};

export default Header;
