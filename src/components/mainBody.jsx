import Contact from './contact';
import '../styles/css/main.css';
import PropTypes from 'prop-types';

const MainBody = ({isOpen}) => {
  return (
    <div className={isOpen ? 'MainBlur' : "Main"}>
      {/* <div className="testing loc-1" id="Home">
        <h1>some text</h1>
      </div>
      <div className="testing loc-2" id="About" />
      <div className="testing loc-3" id="Skills" />
      <div className="testing loc-4" id="Portfolio" />
      <div className="testing loc-5" id="Testimonials" /> */}
      <Contact />
    </div>
  );
}

MainBody.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MainBody;