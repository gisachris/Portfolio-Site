import '../styles/css/about.css';

const AboutPage = () =>  {
  return (
    <div id='About'>
      <section className="pictureSection"></section>
      <section className="detailsSection">
        <div className="header">
          <h1 className="detailsHeader">WHO I AM </h1>
          <span className="aboutText">About Me</span>
        </div>
        <div className="paragraph">
        <div class="text">
          <p>
            I'm Gisa Chris, a solutions developer for the Web.
          </p>

          <p>
            I create web services and applications. Innovative design and compelling architecture are my go-to moves with all my projects.
          </p>

          <p>
            I have been in the development space for nearly three years now and have close to one year of working experience. I’m always curious about learning new skills, tools, and concepts.
            In addition to working on various solo full-stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.
          </p>
        </div>
        </div>
        <div className="buttonSection">
          <a href="https://drive.google.com/file/d/1ky-Ikl2mZ-YB4LQqljbg8tEOSr1N9rV6/view?usp=drive_link" className="aboutButton" target='blank'>My Resume</a>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;