import '../styles/css/navigation.css';
import logo from '../assets/images/logo.png';
// import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return(
    <>
      <div className="navigation">
        <nav>
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
            <button className="HireButton">Hire Me</button>
          </section>
        </nav>
      </div>
    </>
  );
}

export default Navigation;