import { useEffect, useRef, useState } from "react";
import projects from "../data/featured.json";
import textCleanup from "../helpers/textCleanup";
import '../styles/css/featured.css';

const FeaturedApps = () => {
  const [featuredProjects, setFeaturedProjects] = useState(null);
  const projectRefs = useRef([]);

  useEffect(() =>{
    if (projects) {
      setFeaturedProjects(projects);
    }
  });

  const overlayInfo = (index) => {
    projectRefs.current[index].classList.add('showProjectDetail');
  }

  const removeOverlay = (index) => {
    projectRefs.current[index].classList.remove('showProjectDetail');
  }

  const showDataModal = (id) => {
    console.log(id);
  }

  return (
    <div id="Portfolio">
      <section className="portfolioHeader">
        <h1 className="headerText">MY WORKS</h1>
        <span className="featuredText">Featured Works</span>
        <span className="usageNotice">Click on a section or Project Below for more Details</span>
      </section>
      <section className="projectTypeSelectorsHolder">
        <span className="typeSelector">All</span>
        <span className="typeSelector active">Mobile App</span>
        <span className="typeSelector">Website Design</span>
        <span className="typeSelector">Website Development</span>
      </section>
      <section className="projectsHolder projects-grid-container">
        {featuredProjects && featuredProjects.map((project, index) => (
          <div
            className={`project grid-item grid-item-${project.id && project.id}`}
            key={project.id}
            onMouseEnter={() => overlayInfo(index)}
            onMouseLeave={() => removeOverlay(index)}
            onClick={() => showDataModal(project.id)}
          >
            <div className="overlayInfo" ref={(element) => projectRefs.current[index] = element}>
              <div className="imfoSection">
                <h1 className="projectName">{project.name}</h1>
                <span className="projectDetails">Click to view Project Description.</span>
              </div>
            </div>
            {project.images.small && <img src={project.images.small} alt="background__image_project" className="projectImage" />}
            {(!project.images.small && project.images.large) && <img src={project.images.large} alt="background__image_project" className="projectImage" />}
          </div>
        ))}
        {featuredProjects === null && (
          <div className="noProjectsAlert">
            <div className="alert">
              <p>
                Fetching Project Data Is taking longer than Expected.<br />Please Try Accessing them through my Github Account
              </p>
              <a href="https://github.com/gisachris" className="account">
                Github Link
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default FeaturedApps;
