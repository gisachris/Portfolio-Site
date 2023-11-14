import { useState, useRef, useEffect } from 'react';
import '../../styles/css/aniText.css';

const AnimatedText = () => {
  const titles = ['FullStack Developer', 'Backend Engineer', 'FrontEnd Developer', 'Rails Enthusiast'];
  const counter = useRef(0);
  const textHolderRef = useRef();
  const textRef = useRef();
  const currentBorder = useRef('top');
  const textLocation = useRef('top');
  const [text1, setText1] = useState(titles[counter.current]);

  const changeText = () => {
    // classes : drop-text-from-${textLocation} 
    const locations = ['top', 'right', 'bottom', 'left'];
    const locationId = Math.floor(Math.random() * 4);
    const currentLocation = locations[locationId];
    textHolderRef.current.classList.add(`style-border-${currentLocation}`);

    setTimeout(() => {
      textHolderRef.current.classList.remove(`style-border-${currentLocation}`);
      if(counter.current === titles.length - 1){
        counter.current = 0;
        setText1(titles[counter.current]);
      }else {
        counter.current++;
        setText1(titles[counter.current]);
      }
    }, 5000);
  };

  useEffect(() => {
    const intervalId = setInterval(changeText, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={`animatedTextHolder`} ref={textHolderRef}>
      <span className={`textFirst`} ref={textRef}>
        {text1}
      </span>
    </div>
  );
};

export default AnimatedText;
