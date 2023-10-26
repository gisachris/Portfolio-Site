import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import sendButton from "../../assets/icons/emailbutton.svg"
import Loader from "./loader";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const keys = import.meta.env;

    emailjs.sendForm(`${keys.VITE_SERVICE_ID}`, `${keys.VITE_TEMPLATE_ID}`, form.current, `${keys.VITE_PUBLIC_KEY}`)
      .then(() => {
          setLoading(false);

          const inputs = form.current.querySelectorAll('input');
          const textArea = form.current.querySelector('textarea');

          textArea.value = '';
          inputs.forEach(input => {
            input.value = '';
          })
      }, (error) => {
          console.log(error.text);
      });
  };

  const formSubmittion = () => {
    setLoading(true);
    const innerForm = form.current.querySelector(".form");
    innerForm.classList.add("formBlured");
    // form.current.dispatchEvent(new Event("submit"));
  }

  return (
    <div className="contactFormHolder">
      <form ref={form} onSubmit={sendEmail}>
        {loading ? <Loader /> : null}
        <div className="form">
          <section className="field name_field">
            <label>Your Name:</label>
            <input type="text" name="user_name" className="text" required />
          </section>
          <section className="field email_field">
            <label>Your Email:</label>
            <input type="email" name="user_email" className="text" required/>
          </section>
          <section className="field message_field">
            <label>Message:</label>
            <textarea name="message"  className="messagetext" required/>
          </section>
          <label className="sendButtonLabel">
            <img src={sendButton} alt="send button" className="sendButton" onClick={formSubmittion} />
          </label>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;