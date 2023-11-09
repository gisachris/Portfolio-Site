import { useEffect, useRef, useState, useContext } from "react";
import projectModalContext from "../contexts/projectModalContext";
import projects from "../data/featured.json";
import Loader from "../components/shared/loader";
import '../styles/css/featured.css';
import '../styles/css/helpers.css';

const FeaturedApps = () => {
  const [featuredProjects, setFeaturedProjects] = useState(null);
  const [showProjectType, setshowProjectType] = useState('all');
  const [loading, setLoading] = useState(false);
  const projectRefs = useRef([]);
  const { projectData, setProjectData } = useContext(projectModalContext);

  useEffect(() =>{
    if (projects) {
      let selectedProjects = projects.filter((project) => project.type.includes(showProjectType));
      setFeaturedProjects(selectedProjects);
    }
  }, [showProjectType]);

  const overlayInfo = (index) => {
    projectRefs.current[index].classList.add('showProjectDetail');
  }

  const removeOverlay = (index) => {
    projectRefs.current[index].classList.remove('showProjectDetail');
  }

  const setshowbyProjectType = (e) => {
    setshowProjectType(e.target.dataset.value);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  const showProjectModal = (project) => {
    setLoading(true);

    setProjectData({
      status: true,
      Data: project
    })

    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }

  return (
    <div id="Portfolio">
      <section className="portfolioHeader">
        <h1 className="headerText">MY WORKS</h1>
        <span className="featuredText">Featured Works</span>
        <span className="usageNotice">Click on a section or Project Below for more Details</span>
      </section>
      <section className="projectTypeSelectorsHolder">
        <span className={`typeSelector ${showProjectType === 'all' ? 'active' : ''}`} data-value="all" onClick={(e) => setshowbyProjectType(e)}>All</span>
        <span className={`typeSelector ${showProjectType === 'mobile' ? 'active' : ''}`} data-value="mobile" onClick={(e) => setshowbyProjectType(e)}>Mobile</span>
        <span className={`typeSelector ${showProjectType === 'web' ? 'active' : ''}`} data-value="web" onClick={(e) => setshowbyProjectType(e)}>Design</span>
        <span className={`typeSelector ${showProjectType === 'webmob' ? 'active' : ''}`} data-value="webmob" onClick={(e) => setshowbyProjectType(e)}>Development</span>
      </section>
      <section className="projects">
        {loading && <Loader />}
        <section className={`projectsHolder projects-grid-container-${showProjectType || 'all'} ${loading || projectData.status ? 'blurred' : ''}`}>
          {featuredProjects && featuredProjects.map((project, index) => (
            <div
              className={`project grid-item grid-item-${project.id && project.id}`}
              key={project.id}
              onMouseEnter={() => overlayInfo(index)}
              onMouseLeave={() => removeOverlay(index)}
              onClick={() => showProjectModal(project)}
            >
              <div className="overlayInfo" ref={(element) => projectRefs.current[index] = element}>
                <div className="imfoSection">
                  <h1 className="projectName">{project.name}</h1>
                  <span className="projectDetails">Click to view Project Details.</span>
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
      </section>
    </div>
  );
}

export default FeaturedApps;
