import {useState } from 'react';
import formContext from "../contexts/formContext";
import projectModalContext from '../contexts/projectModalContext';
import HomePage from './home';
import AboutPage from './about';
import SkillsPage from './skills';
import FeaturedApps from './featured';
import ProjectModal from './shared/projectDataModal';
import Contact from './contact';
import Testimonials from './testimonials';
import Reachout from './reachOut';
import PropTypes from 'prop-types';
import '../styles/css/main.css';
import '../styles/css/reach.css';

const MainBody = ({isOpen}) => {
  const [formInput, setFormInput] = useState(null);
  const [projectData, setProjectData] = useState({
    status: false,
    Data: null
  })

  return (
    <div className={isOpen ? 'MainBlur' : "Main"}>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <projectModalContext.Provider value={{projectData, setProjectData}}>
        <FeaturedApps />
        <ProjectModal />
      </projectModalContext.Provider>
      <section className="testimonialContactReachHolder" id="Contact">
        <formContext.Provider value={{formInput, setFormInput}}>
          <Testimonials />
          <Reachout />
          <Contact />
        </formContext.Provider>
      </section>
    </div>
  );
}

MainBody.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MainBody;