import { useContext } from "react";
import Carousel from "nuka-carousel";
import recommendationsContext from "../../contexts/recomsContext";
import textCleanup from "../../helpers/textCleanup";
import linkedInLogo from "../../assets/icons/linkedin.png"
import '../../styles/css/testimonials.css';

const LinkedInRecommendations = () => {
  const recoms = useContext(recommendationsContext);
  const pureRecomendations = recoms ? recoms.filter(r => r.received === true) : null;
  console.log(pureRecomendations);

  const largeScreenParams = {
    cellSpacing: 0,
    cellAlign: "center",
    wrapAround: true,
    animation: "zoom",
    dragging: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    withoutControls: true,
    className: "carouselContainer",
    defaultControlsConfig: {
      containerClassName: "dotsSliderHolder",
    },
  };

  // Define carousel parameters for mobile views
  const mobileViewParams = {
    cellSpacing: 0,
    cellAlign: "center",
    wrapAround: true,
    animation: "zoom",
    dragging: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    withoutControls: true,
    className: "slidesContainer",
    defaultControlsConfig: {
      containerClassName: "dotsSliderHolder",
    },
  };

  return (
    <div className="recommendationsHolder">
      {pureRecomendations ? (
        <div className="carouselContainer">
          <Carousel {...(window.innerWidth <= 767 ? mobileViewParams : largeScreenParams)}>
          {pureRecomendations.map(recommendation =>(
            <div className="singleRecomendationHolder" key={recommendation.id}>
              <section className="personalInformation">
                <section className="coreInfo">
                <img src={recommendation.profile_image} alt="person Photo" className="personal_Photo" />
                <span className="personal_name">{recommendation.profile_name}</span>
                </section>
                <span className="date_made">{recommendation.date_time}</span>
              </section>
              <section className="personalTitle">
              <h2 className="title">{
                textCleanup(recommendation.profile_position, 120, '...')
              }</h2>
              <p className="relation">{recommendation.profile_notes}</p>
              </section>
              <section className="recommendation">
              <p className="recommendationBlock">
                <span className="whiteLayer" />
                {textCleanup(recommendation.description, 280)}
              </p>
              </section>
              <section className="extras">
              <img src={linkedInLogo} className="linkednLogo" alt="linkednLogo" />
              <a href="https://www.linkedin.com/in/gisa-chris/" className="readmore">Read More...</a>
              </section>
            </div>
            ))}
          </Carousel>
        </div>
          ) : (
        <div className="recommendationsNotice">
          <p className="notice">
            Recommendations cannot be accessed remotely for now. Check them out on 
            <a href="">My LinkedIn page</a>
            , or refresh the page.
          </p>
        </div>
        )}
    </div>
  );
};

export default LinkedInRecommendations;
