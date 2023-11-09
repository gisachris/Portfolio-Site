import { useContext, useEffect, useRef } from 'react';
import projectModalContext from '../../contexts/projectModalContext';
import closeButton from '../../assets/icons/closeButtonPrimary.png';
import demoLink from '../../assets/icons/liveDemoLink.png';
import sourceLink from '../../assets/icons/sourceCodeLink.png';
import '../../styles/css/projectModal.css';
import '../../styles/css/helpers.css';

const ProjectModal = () => {
  const { projectData, setProjectData } = useContext(projectModalContext);
  const { status, Data } = projectData;
  const closeButtonRef = useRef();

  const hideModal = () => {
    if(status === true) {
      setProjectData({
        status: false,
        Data: null
      })
    }
  }

  const handleCloseButtonClick = () => {
    closeButtonRef.current.classList.add("clickBounce");
    hideModal();

    setTimeout(() => {
      closeButtonRef.current.classList.remove("clickBounce");    
    }, 200);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', hideModal);
  
    return () => {
      window.removeEventListener('scroll', hideModal);
    };
  });

  return(
    <div className={`projectModalHolder ${status ? 'showProjectModal' : ''}`} >
      <div className="dataDisplayShadow" onClick={hideModal}/>
      <div className={`dataDisplayBoard`}>
        <img 
          ref={closeButtonRef}
          src={closeButton}
          alt="closeButton"
          className="modalCloseButton" 
          onClick={handleCloseButtonClick}
        />
        {Data && (
          <>
            <section className="projectDetails">
              {Data.images.large && (
                <div className="projectImage">
                  <img src={Data.images.large} alt="projectDisplay" />
                </div>
              )}
              <div className="projectDescription">
                {Data.name && (<h1 className="projectTitle">{Data.name}</h1>)}
                {Data.description && (<p className="projectText">{Data.description}.</p>)}
              </div>
            </section>
            <section className="moreProjectInfo">
              <section className="projectLinks">
                <a href={Data.links.liveDemo} target='blank' className="liveDemoLink">
                  <span className="linkText">Live Demo</span>
                  <img src={demoLink} alt="demoLinkIcon" className='liveDemoIcon'/>
                </a>
                <a href={Data.links.sourceCode} target='blank' className="sourceCodeLink">
                  <span className="linkText">SourceCode</span>
                  <img src={sourceLink} alt="sourceLinkIcon" className='sourceCodeIcon'/>
                </a>
              </section>
              <section className="projectTechStack">
                <span className="techHeader">Technologies</span>
                {Data.techStack.frontend && (
                  <div className="techgroup">
                    <span className="technologyType">Frontend</span>
                    <section className="technologies">
                      {Data.techStack.frontend.map((technology) => (
                        <div className="singletechHolder" key={technology} title={`${technology} was used in the development of this project`}>
                          <img src={`/technologies/${technology}.png`} alt="technology" />
                        </div>
                      ))}
                    </section>
                  </div>
                )}
                {Data.techStack.backend && (
                  <div className="techgroup">
                    <span className="technologyType">Backend</span>
                    <section className="technologies">
                      {Data.techStack.backend.map((technology) => (
                        <div className="singletechHolder" key={technology} title={`${technology} was used in the development of this project`}>
                          <img src={`/technologies/${technology}.png`} alt="technology" />
                        </div>
                      ))}
                    </section>
                  </div>
                )}
                {Data.techStack.testing && (
                  <div className="techgroup">
                    <span className="technologyType">Testing</span>
                    <section className="technologies">
                      {Data.techStack.testing.map((technology) => (
                        <div className="singletechHolder" key={technology} title={`${technology} was used in the Testing of this project`}>
                          <img src={`/technologies/${technology}.png`} alt="technology" />
                        </div>
                      ))}
                    </section>
                  </div>
                )}
              </section>
            </section>
          </>
        )}
        {!Data === null && (
          <section className="noDataAlert">
            <p className="alert">please Reload the page To get clear Information</p>
          </section>
        )}
      </div>
    </div>
  )
}

export default ProjectModal;