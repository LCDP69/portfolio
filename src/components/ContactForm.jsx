import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_8omz4s9",
        "template_n7x9iyt",
        form.current,
        import.meta.env.VITE_APP_ID
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          if (typeof formMessage === "Element") {
            formMessage.innerHTML = "Message Envoyé !";
          }

          setTimeout(() => {
            if (typeof formMessage === "Element") {
              formMessage.innerHTML = "";
            }
          }, 2500);
        },
        (error) => {
          console.log("FAILED...", error.text);
          if (typeof formMessage === "Element") {
            formMessage.innerHTML =
              "Une erreur s'est produite, veuillez réessayer.";
          }

          setTimeout(() => {
            if (typeof formMessage === "Element") {
              formMessage.innerHTML = "";
            }
          }, 5000);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
