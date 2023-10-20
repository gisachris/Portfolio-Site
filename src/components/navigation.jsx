import '../styles/css/navigation.css';
import logo from '../assets/images/logo.png';
import menuButton from '../assets/icons/hamenu.png';
import closeButton from '../assets/icons/close.png';
// import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return(
    <>
      <div className="navigationBlurOverlay" />
      <div className="navigation">
        <nav>
          <section className="menuControls">
            <img src={menuButton} alt="hamMenu" className="hamenu" />
            <img src={closeButton} alt="close button" className="closeButton" />
          </section>
          <section className="navLogoPlacement">
            <img src={logo} alt="logo-art" />
          </section>
          <section className="navLinks">
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Skills">Skills</a>
            <a href="/Portfolio">Portfolio</a>
            <a href="/Contact">Contact</a>
          </section>
          <section className="navHireButton">
            <button type="submit" className="HireButton">Hire Me</button>
          </section>
        </nav>
      </div>
    </>
  );
}

export default Navigation;