import { useState, useContext, useEffect, useRef } from 'react';
import projectModalContext from '../../contexts/projectModalContext';
import closeButton from '../../assets/icons/closeButtonPrimary.png';
import demoLink from '../../assets/icons/liveDemoLink.png';
import sourceLink from '../../assets/icons/sourceCodeLink.png';
import '../../styles/css/projectModal.css';
import '../../styles/css/helpers.css';

const ProjectModal = () => {
  const { projectData, setProjectData } = useContext(projectModalContext);
  const { status, Data } = projectData;
  const [isLoading, setIsLoading] = useState(false);
  const closeButtonRef = useRef();

  const hideModal = () => {
    if(status === true) {
      setProjectData({
        status: false,
        Data: null
      })
    }
  }

  const begginingDelay = () => {
    if(status){
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)
      }, 200)
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
      <div className={`dataDisplayBoard ${isLoading ? 'blurred' : ''}`}>
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
                  <span className="technologyType">Frontend</span>
                )}
                <section className="backEndTechnologies"></section>
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