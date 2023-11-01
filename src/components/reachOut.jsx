import { useContext } from "react";
import formContext from "../contexts/formContext";
import "../styles/css/reach.css";

const Reachout = () => {
  const { formInput } = useContext(formContext);

  const focusNameInput = () => {
    if(formInput){
      const form = formInput.current;
      const nameInput = form.querySelector(".name_text");
      if (nameInput) {
        nameInput.focus();
      }
    }
  }

  return (
    <div className="reachOutHolder">
      <div className="upperHold"/>
      <div className="lowerHold"/>
      <div className="reachOutInfoHolder">
        <div className="reachOutImfo">
          <span className="callToAction">Get in Touch!</span>
          <p className="callDetail">Have questions or ideas you&#39;d like to discuss? I&#39;m just an email away!. Let&#39;s start a conversation.</p>
          <button className="callButton" onClick={focusNameInput}>Let&#39;s Do This!</button>
        </div>
      </div>
    </div>
  );
}

export default Reachout;