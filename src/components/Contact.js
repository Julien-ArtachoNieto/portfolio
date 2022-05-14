import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contact.css'
const Contact =()=>{
  const form = useRef();
  const publickey=process.env.REACT_APP_EMAILJS_KEY
  const templateid=process.env.REACT_APP_TEMPLATE_ID
  const serviceid=process.env.REACT_APP_SERVICE_ID
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceid,templateid, form.current, publickey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form className="contact-form-container" ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="user_name" />
      <label>Entreprise</label>
      <input type="text" name="user_entreprise" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea className="contact-msg" name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact