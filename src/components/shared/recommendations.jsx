const LinkedInRecommendations = () => {
  const recommendationsLink = import.meta.env.VITE_RECOMMENDATIONS_LINK
  const iframeSrc = recommendationsLink;

  return (
    <div className="recommendationsHolder">
      <iframe
      src={iframeSrc}
      title="LinkedIn Recommendations"
      width="100%"
      height="600"
      frameBorder="0" // Ensure there's no border
    />

    <a href="https://www.linkedin.com/in/gisa-chris/" className="moreRecommendations">Read All Recommendations</a>
    </div>
  );
};

export default LinkedInRecommendations;
