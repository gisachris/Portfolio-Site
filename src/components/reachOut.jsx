import { useRef } from "react";
import "../styles/css/reach.css";

const Reachout = () => {

  const doClick = () => {
    const formName = useRef(null);
  }

  return (
    <div className="reachOutHolder">
      <div className="upperHold"/>
      <div className="lowerHold"/>
      <div className="reachOutInfoHolder">
        <div className="reachOutImfo">
          <span className="callToAction">Get in Touch!</span>
          <p className="callDetail">Have questions or ideas you'd like to discuss? I'm just an email away!. Let's start a conversation.</p>
          <button className="callButton" onClick={doClick}>Let's Do This!</button>
        </div>
      </div>
    </div>
  );
}

export default Reachout;