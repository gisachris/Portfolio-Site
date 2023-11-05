import { useState, useContext, useEffect, useRef } from 'react';
import projectModalContext from '../../contexts/projectModalContext';
import closeButton from '../../assets/icons/closeButtonPrimary.png';
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
              <div className="projectImage"></div>
              <div className="projectDescription">
                <h1 className="projectTitle"></h1>
                <p className="projectText"></p>
              </div>
            </section>
            <section className="moreProjectInfo">
              <section className="projectLinks">
                <section className="liveDemoLink"></section>
                <section className="sourceCodeLink"></section>
              </section>
              <section className="projectTechStack">
                <section className="frontEndTechnologies"></section>
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