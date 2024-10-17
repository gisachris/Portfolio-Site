import PropTypes from 'prop-types';
import '../styles/css/navigation.css';
import logo from '/images/logo.png';
import menuButton from '/icons/hamenu.png';
import closeButton from '/icons/close.png';
import { Link } from 'react-scroll';

const Navigation = ({ isOpen, toggleNavigation }) => {
  return (
    <>
      <div className="navHolder">
        <section className="hamburgerSection">
          <img src={menuButton} alt="hamMenu" className="hamenu" onClick={toggleNavigation} />
        </section>
        <nav className={isOpen ? 'navigation visible' : 'navigation hidden'}>
          <section className="menuControls">
            <img src={closeButton} alt="close button" className="closeButton" onClick={toggleNavigation} />
          </section>
          <section className="navLogoPlacement">
            <img src={logo} alt="logo-art" />
          </section>
          <section className="navLinks">
            <Link to="Home" spy={true} smooth={true} offset={-250} duration={500} onClick={toggleNavigation}>Home</Link>
            <Link to="About" spy={true} smooth={true} offset={-250} duration={500} onClick={toggleNavigation}>About</Link>
            <Link to="Skills" spy={true} smooth={true} offset={-250} duration={500} onClick={toggleNavigation}>Skills</Link>
            <Link to="Portfolio" spy={true} smooth={true} offset={-250} duration={500} onClick={toggleNavigation}>Portfolio</Link>
            <Link to="Testimonials" spy={true} smooth={true} offset={-250} duration={500} onClick={toggleNavigation}>Testimonials</Link>
            <Link to="Contact" spy={true} smooth={true} offset={500} duration={500} onClick={toggleNavigation}>Contact</Link>
          </section>
          <section className="navHireButton">
            <a href="https://drive.google.com/file/d/1GEjS6uO6AQsbOqytgpK-jJOccwTD-uTw/view?usp=sharing" className="aboutButton" target='blank'>My Resume</a>
          </section>
        </nav>
      </div>
    </>
  );
}

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleNavigation: PropTypes.func.isRequired,
};

export default Navigation;