import { useEffect, useState } from "react";
import projects from "../data/featured.json";
import '../styles/css/featured.css';

const FeaturedApps = () => {
  const [featuredProjects, setFeaturedProjects] = useState(null);

  useEffect(() =>{
    if(projects){
      setFeaturedProjects(projects);
    }
  })

  return(
    <div id="Portfolio">
      <section className="portfolioHeader">
        <h1 className="headerText">MY WORKS</h1>
        <span className="featuredText">Featured Works</span>
      </section>
      <section className="projectTypeSelectorsHolder">
        <span className="typeSelector">All</span>
        <span className="typeSelector active">Mobile App</span>
        <span className="typeSelector">Website Design</span>
        <span className="typeSelector">Website Development</span>
      </section>
      <section className="projectsHolder projects-grid-container">
        {featuredProjects && featuredProjects.map(project => (
          <div className={`project grid-item grid-item-${project.id && project.id}`}>
            {project.images.large && <img src={`${project.images.large}`} alt="background__image_project"  className="projectImage"/>}
          </div>
        ))}
        {featuredProjects === null && (
          <div className="noProjectsAlert">
            <div className="alert">
              <p>
                fetching Project Data Is taking longer than Expected.<br />Please Try Accessing them through my Github Account
              </p>
              <a href="https://github.com/gisachris" className="account">
                Github Link
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default FeaturedApps;