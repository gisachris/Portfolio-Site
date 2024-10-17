import skills from '../data/skills.json';
import { Link } from 'react-scroll';
import '../styles/css/skills.css';

const SkillsPage = () => {
  const techSkills = skills || null;

  return (
    <div id='Skills'>
      <section className="skillsText">
        <div className="topText">
          <h1 className="skillsHeader">My Skills</h1>
          <p className="skillsTopPar">What My Technical Skills Include.</p>
        </div>
        <div className="lowText">
          <p className="lowerPar">
            I develop visually appearing and functional websites, apps and services that get things done with less effort and provide great user Experiences for the end User.
          </p>
        </div>
        <div className="skillsButtonHolder">
          <Link to="Contact" spy={true} smooth={true} offset={600} duration={500}>Contact Me</Link>
        </div>
      </section>
      <section className="skillsShowCase">
        <div className="skillsHolder">
          {techSkills && techSkills.map((skill) => (
            <div className="skillCover" key={skill} title={skill}>
              <img
                src={`/technologies/${skill}.png` || `/technologies/${skill}.svg`}
                alt="skill Display"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;