import { useRef, useContext } from "react";
import PopupContext from "../../contexts/popupContext";
import "../../styles/css/message.css";

const PopUpMessage = () => {
  const popUp = useRef(null);

  return (
    <div ref={popUp} className="messageHolder">
      <h1 className="message">{}</h1>
    </div>
  );
};

export default PopUpMessage;