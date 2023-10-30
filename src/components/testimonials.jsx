import LinkedInRecommendations from "./shared/recommendations";
import "../styles/css/testimonials.css";

const Testimonials = () => {
  return (
    <section id="Testimonials">
      {/* <a className="reccomendationsOverHead" href="https://www.linkedin.com/in/gisa-chris/" target="blank"/> */}
      <div className="header">
        <h1 className="title">TESTIMONIALS</h1>
        <h2 className="titlecomp">What customers and colleagues say</h2>
      </div>
      <div className="tms">
        <LinkedInRecommendations />
      </div>
    </section>
  );
}

export default Testimonials;