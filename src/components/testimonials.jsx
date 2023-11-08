import { useEffect, useState, useRef, useContext } from "react";
import LinkedInRecommendations from "./shared/recommendations";
import recommendationsContext from "../contexts/recomsContext";
import PopupContext from "../contexts/popupContext";
import Loader from "./shared/loader";
import "../styles/css/testimonials.css";
import "../styles/css/helpers.css";

const Testimonials = () => {
  const [loading, setLoading] = useState(false);
  const [recoms, setRecoms] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  const recomsHolder = useRef(null);
  const hasEffectRun = useRef(false);

  // eslint-disable-next-line 
  const recommendationsLink = process.env.RECOMMENDATIONS_LINK;
  const { setPopupShow } = useContext(PopupContext);

  useEffect(() => {
    // Intersection observer
    const observer = new IntersectionObserver( async (entries) => {
      const [entry] = entries;
      try {
        if (entry.isIntersecting && !hasEffectRun.current) {
          hasEffectRun.current = true;
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

    let recommendationsHolder = recomsHolder.current;

    if (recommendationsHolder) {
      observer.observe(recommendationsHolder);
    }

    return () => {
      if (recommendationsHolder) observer.unobserve(recommendationsHolder);
    }
  }, []);

  return (
    <section ref={recomsHolder} id="Testimonials">
      <div className="header">
        <h1 className="title">TESTIMONIALS</h1>
        <h2 className="titlecomp">What customers and colleagues say</h2>
        <div className="swipeNotify">
          <span className="swipeText">Swipe to view More</span>
        </div>
      </div>
      <div className="tms">
        {loading && <Loader />}
        <recommendationsContext.Provider value={[recoms, loading]}>
          <LinkedInRecommendations />
        </recommendationsContext.Provider>
      </div>
    </section>
  );
}

export default Testimonials;
