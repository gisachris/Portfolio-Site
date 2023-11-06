import {useState } from 'react';
import formContext from "../contexts/formContext";
import projectModalContext from '../contexts/projectModalContext';
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
      <div className="testing loc-1" id="Home">
        <h1>some text</h1>
      </div>
      <div className="testing loc-2" id="About" />
      <div className="testing loc-3" id="Skills" />
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