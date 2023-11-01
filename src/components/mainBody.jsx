import {useState } from 'react';
import formContext from "../contexts/formContext";
import Contact from './contact';
import Testimonials from './testimonials';
import Reachout from './reachOut';
import PropTypes from 'prop-types';
import '../styles/css/main.css';
import '../styles/css/reach.css';

const MainBody = ({isOpen}) => {
  const [formInput, setFormInput] = useState(null);
  return (
    <div className={isOpen ? 'MainBlur' : "Main"}>
      <div className="testing loc-1" id="Home">
        <h1>some text</h1>
      </div>
      <div className="testing loc-2" id="About" />
      <div className="testing loc-3" id="Skills" />
      <div className="testing loc-4" id="Portfolio" />
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