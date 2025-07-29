import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1r5t009",
        "template_6hdjg1f",
        form.current,
        "i5keRWniCV-lpH2UK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
