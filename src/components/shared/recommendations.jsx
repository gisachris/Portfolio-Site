const LinkedInRecommendations = () => {
  const recommendationsLink = import.meta.env.VITE_RECOMMENDATIONS_LINK
  const iframeSrc = recommendationsLink;

  return (
    <div className="recommendationsHolder">
      <iframe
      src={iframeSrc}
      title="LinkedIn Recommendations"
      frameBorder="0" // Ensure there's no border
    />
    </div>
  );
};

export default LinkedInRecommendations;
