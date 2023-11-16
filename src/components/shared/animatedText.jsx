import React, { useState, useRef, useEffect } from 'react';
import '../../styles/css/aniText.css';

const AnimatedText = () => {
  const titles = ['Web Engineer', 'FrontEnd Developer', 'Backend Engineer', 'Rails Developer', 'Api Engineer', 'Rails Enthusiast', 'FullStack Developer'];
  const textHolderRef = useRef();
  const textRef = useRef();
  const [index, setIndex] = useState(0);
  const [text1, setText1] = useState(titles[0]);

  useEffect(() => {
    const locations = ['top', 'right', 'bottom', 'left'];
    const currentLocation = locations[Math.floor(Math.random() * 4)];

    setText1(titles[index]);
    textHolderRef.current.classList.add(`style-border-${currentLocation}`);
    textRef.current.classList.add(`drop-text-from-${currentLocation}`);

    const timeoutId = setTimeout(() => {
      textHolderRef.current.classList.remove(`style-border-${currentLocation}`);
      textRef.current.classList.remove(`drop-text-from-${currentLocation}`);
    }, 3500);

    return () => {
      textHolderRef.current.classList.remove(`style-border-${currentLocation}`);
      textRef.current.classList.remove(`drop-text-from-${currentLocation}`);
      clearTimeout(timeoutId);
    };
  }, [index]);

  useEffect(() => {
    const delayId = setTimeout(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3500);

    return () => {
      clearTimeout(delayId);
    };
  }, [index]);

  return (
    <div className="animatedTextHolder" ref={textHolderRef}>
      <span className="textFirst" ref={textRef}>
        {text1}
      </span>
    </div>
  );
};

export default AnimatedText;
