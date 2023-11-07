import emblemOne from '../assets/icons/emblem-one.png';
import emblemTwo from '../assets/icons/emblem-two.png';
import emblemThree from '../assets/icons/emblem-three.png';
import headPiece from '../assets/images/mini.png'
import wavingHand from '../assets/icons/wavingHand.png';
import '../styles/css/home.css';

const HomePage = () => {
  const cards = [
    {
      emblem: emblemOne,
      text: {
        upper: '3+',
        sub: 'Years of learning and working Experience'
      },
      link: "#About"
    },
    {
      emblem: emblemTwo,
      text: {
        upper: '50+',
        sub: 'Completed Projects'
      },
      link: "#Portfolio"
    },
    {
      emblem: emblemThree,
      text: {
        upper: '35+',
        sub: 'Happy Clients and  colleagues'
      },
      link: "#Testimonials"
    }
  ];

  return (
    <div id="Home">
      <section className="introHeader">
        <div className="headerpart1">
          <h1 className="introductionText">
            Hi, I am <a href='#About'>Gisa Chris</a> 
          </h1>
          <img src={wavingHand} alt="waving Hand" />
        </div>
        <div className="headerpart2">
          <div className="textHolder">
            <span className="creative">Creative Designer</span>
            <span className="and">&</span>
            <span className='stack'>FullStack Developer</span>
          </div>
        </div>
        <div className="headerpart3">
          <h1 className="desc">I Design and Code Web services and Applications</h1>
        </div>
      </section>
      <section className="headPieceSection">
        <div className="headPieceContainer">
          <div className="background" />
          <img src={headPiece} alt="headpiece" />
        </div>
      </section>
      <section className="achievementSection">
        <div className="cardHolder">
          {cards.map((card) => (
            <div className="arch" key={card.link}>
            <img src={card.emblem} alt="" />
            <section className="text">
              <span className="upperText">{card.text.upper}</span>
              <span className="subText">{card.text.sub}</span>
            </section>
            <a href={card.link}>&gt;</a>
          </div>
          ))}
        </div>
          
      </section>
    </div>
  );
}

export default HomePage;