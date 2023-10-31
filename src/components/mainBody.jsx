import Contact from './contact';
import Testimonials from './testimonials';
import PropTypes from 'prop-types';
import '../styles/css/main.css';

const MainBody = ({isOpen}) => {
  return (
    <div className={isOpen ? 'MainBlur' : "Main"}>
      <div className="testing loc-1" id="Home">
        <h1>some text</h1>
      </div>
      <div className="testing loc-2" id="About" />
      <div className="testing loc-3" id="Skills" />
      <div className="testing loc-4" id="Portfolio" />
      <Testimonials />
      <Contact />
    </div>
  );
}

MainBody.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MainBody;