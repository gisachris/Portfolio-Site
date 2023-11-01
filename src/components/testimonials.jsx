import { useEffect, useState, useRef, useContext } from "react";
import LinkedInRecommendations from "./shared/recommendations";
import recommendationsContext from "../contexts/recomsContext";
import PopupContext from "../contexts/popupContext";
import Loader from "./shared/loader";
import "../styles/css/testimonials.css";

const Testimonials = () => {
  const [loading, setLoading] = useState(false);
  const [recoms, setRecoms] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  const recomsHolder = useRef(null);
  const recommendationsLink = import.meta.env.VITE_RECOMMENDATIONS_LINK;

  const { setPopupShow } = useContext(PopupContext);

  useEffect(() => {
    // Intersection observer
    const observer = new IntersectionObserver( async (entries) => {
      const [entry] = entries;
      try {
        if (entry.isIntersecting && dataFetched === false) {
          setLoading(true);
  
          const request = await fetch(recommendationsLink);
          if (request.ok && dataFetched === false) {
            const response = await request.json();
            setRecoms(response.posts);
            setDataFetched(true);
          }
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setPopupShow({
          status: true,
          message: `${error}`,
          pass: false,
        });

        setTimeout(() => {
          setPopupShow({
            status: false,
            message: null,
            pass: false,
          });
        }, 3000)
      }
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    });

    if (recomsHolder.current) {
      observer.observe(recomsHolder.current);
    }

    return () => {
      if (recomsHolder.current) observer.unobserve(recomsHolder.current);
    }    
  });

  return (
    <section ref={recomsHolder} id="Testimonials">
      <div className="header">
        <h1 className="title">TESTIMONIALS</h1>
        <h2 className="titlecomp">What customers and colleagues say</h2>
      </div>
      <div className="tms">
        {loading ? <Loader /> : null}
        <recommendationsContext.Provider value={recoms}>
          <LinkedInRecommendations />
        </recommendationsContext.Provider>
      </div>
    </section>
  );
}

export default Testimonials;
