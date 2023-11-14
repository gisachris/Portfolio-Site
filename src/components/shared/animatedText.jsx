import { useState, useRef, useEffect } from 'react';
import '../../styles/css/aniText.css';

const AnimatedText = () => {
  const titles = ['Web Developer', 'Api Developer', 'Backend Engineer', 'FrontEnd Developer', 'Rails Enthusiast', 'Rails Developer', 'Web Enthusiast',  'FullStack Developer'];
  const textHolderRef = useRef();
  const textRef = useRef();
  const [index, setIndex] = useState(0);
  const [text1, setText1] = useState(titles[0]);

  useEffect(() => {
    const locations = ['top', 'right', 'bottom', 'left'];
    const currentLocation = locations[Math.floor(Math.random() * 4)];

    if (index < titles.length && index !== titles.length - 1) {
      setText1(titles[index]);
      textHolderRef.current.classList.add(`style-border-${currentLocation}`);
      textRef.current.classList.add(`drop-text-from-${currentLocation}`);

      setTimeout(() => {
        textHolderRef.current.classList.remove(`style-border-${currentLocation}`);
        textRef.current.classList.remove(`drop-text-from-${currentLocation}`);
        setIndex((prevIndex) => prevIndex + 1);
      }, 3500);
    }

    if(index === titles.length - 1){
      setIndex(titles.length - 1);
      setText1(titles[index]);
      textHolderRef.current.classList.add('holderStay');
      textRef.current.classList.add('textStay');
    }
  }, [index]);

  return (
    <div className={`animatedTextHolder`} ref={textHolderRef}>
      <span className={`textFirst`} ref={textRef}>
        {text1}
      </span>
    </div>
  );
};

export default AnimatedText;
