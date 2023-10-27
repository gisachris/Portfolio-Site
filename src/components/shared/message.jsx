import { useState, useEffect, useRef, useContext } from "react";
import PopupContext from "../../contexts/popupContext";
import check from "../../assets/icons/check_icon.png";
import fail from "../../assets/icons/fail_icon.png";
import "../../styles/css/message.css";

const PopUpMessage = () => {
  const popUp = useRef(null);
  const { popupShow } = useContext(PopupContext);
  const [cleanMessage, setCleanMessage] = useState('Connection To Service Error.');

  useEffect(() => {
    if (popupShow.message !== null && popupShow.message.length > 10) {
      const message = popupShow.message;
      setCleanMessage(message.slice(0, message.indexOf(".")) + ".");
    }
  }, [popupShow]);

  const messageClasses = `messageHolder ${popupShow.status ? 'display' : 'dissapear'}`;

  return (
    <div ref={popUp} className={messageClasses}>
      <img src={popupShow.pass ? check : fail} className="messageIcon" />
      <h1 className="message">
        {cleanMessage}
      </h1>
    </div>
  );
};


export default PopUpMessage;