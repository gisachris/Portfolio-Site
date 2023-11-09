import { useState, useRef, useContext, useEffect } from "react";
import PopupContext from "../../contexts/popupContext";
import formContext from "../../contexts/formContext";
import emailjs from "@emailjs/browser";
import sendButton from "/icons/emailButton.svg";
import Loader from "./loader";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const { setPopupShow } = useContext(PopupContext);
  const { setFormInput } = useContext(formContext);

  useEffect(() => {
    setFormInput(form);
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const innerForm = form.current.querySelector(".form");
    innerForm.classList.add("formBlured");
    setLoading(true);

    /* eslint-disable */
    const serviceId = process.env.SERVICE_ID;
    console.log(serviceId);
    const templateId = process.env.TEMPLATE_ID;
    console.log(templateId);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    console.log(publicKey);
    /* eslint-disable */
  
    emailjs.sendForm(`${serviceId}`, `${templateId}`, form.current, `${publicKey}`)
      .then(() => {
        const innerForm = form.current.querySelector(".form");
        innerForm.classList.remove("formBlured");
        setLoading(false);

        // Email sent successfully
        setPopupShow({
          status: true,
          message: "Email sent successfully!.",
          pass: true,
        });

        const name = form.current.querySelector('input[name="user_name"]');
        const email = form.current.querySelector('input[name="user_email"]');
        const textArea = form.current.querySelector('textarea');
        
        name.value = '';
        email.value = '';
        textArea.value = '';

        // Hide the success message after 2 seconds
        setTimeout(() => {
          setPopupShow({
            status: false,
            message: null,
            pass: true,
          });
        }, 2000);
      })
      .catch(error => {
        // Email sending failed
        const innerForm = form.current.querySelector(".form");
        innerForm.classList.remove("formBlured");
        setLoading(false);

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
        }, 3000);
      });
  };

  return (
    <div className="contactFormHolder">
      <form ref={form} onSubmit={sendEmail}>
        {loading && <Loader />}
        <h1 className="contactHeader">Contact Me</h1>
        <div className={loading ? "form blurred" : "form"}>
          <section className="field name_field">
            <label>Your Name</label>
            <input type="text" name="user_name" className="text name_text" required />
          </section>
          <section className="field email_field">
            <label>Your Email</label>
            <input type="email" name="user_email" className="text" required/>
          </section>
          <section className="field message_field">
            <label>Message</label>
            <textarea name="message"  className="messagetext" required/>
          </section>
          <label className="sendButtonLabel">
            <button type="submit">
              <img src={sendButton} alt="send button" className="sendButton" />
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;