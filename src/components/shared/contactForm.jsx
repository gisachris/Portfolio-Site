import { useState, useRef, useContext } from "react";
import PopupContext from "../../contexts/popupContext";
import emailjs from "@emailjs/browser";
import sendButton from "../../assets/icons/emailbutton.svg";
import Loader from "./loader";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const { setPopupShow } = useContext(PopupContext);

  const sendEmail = (e) => {
    e.preventDefault();
    const keys = import.meta.env;

    setLoading(true);

    emailjs.sendForm(`${keys.VITE_SERVICE_TESTING_ID}`, `${keys.VITE_TEMPLATE_ID}`, form.current, `${keys.VITE_PUBLIC_KEY}`)
      .then(() => {
        // Email sent successfully
        setPopupShow({
          status: true,
          message: "Email sent successfully!.",
          pass: true,
        });

        const inputs = form.current.querySelectorAll('input');
        const textArea = form.current.querySelector('textarea');

        textArea.value = '';
        inputs.forEach(input => {
          input.value = '';
        });

        // Hide the success message after 2 seconds
        setTimeout(() => {
          setPopupShow({
            status: false,
            message: null,
            pass: true,
          });

          setLoading(false);
        }, 2000);
      })
      .catch(error => {
        // Email sending failed
        setPopupShow({
          status: true,
          message: `Error: ${error.text}`,
          pass: false,
        });

        // Hide the error message after 3 seconds
        setTimeout(() => {
          setPopupShow({
            status: false,
            message: null,
            pass: false,
          });

          console.log('it fails');
          setLoading(false); 
        }, 3000);
      });
  };

  const formSubmittion = () => {
    // setLoading(true);

    const innerForm = form.current.querySelector(".form");
    innerForm.classList.add("formBlured");
    console.log('point1');
    // form.current.submit((e) => {
    //   sendEmail(e);
    // });
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
          <button type="submit">sub</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;