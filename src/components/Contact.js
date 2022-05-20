import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import "./styles/modal.css"
import './styles/contact.css'
const Contact =()=>{
  const form = useRef();
  const publickey=process.env.REACT_APP_EMAILJS_KEY
  const templateid=process.env.REACT_APP_TEMPLATE_ID
  const serviceid=process.env.REACT_APP_SERVICE_ID
  const [toggle,setToggle]=useState(false)
  const modalToggle =()=>{
    const modalWindow=document.querySelector(".modal-bg")
    if(toggle){
      modalWindow.style.display="none"
      setToggle(false)
    }else{
      modalWindow.style.display="block"
      setToggle(true)
    }
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceid,templateid, form.current, publickey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    modalToggle()
  };

  return (
    <div className="contact-container">
      <p className="contact-speech">L'endroit parfait pour me contacter, me faire une proposition sérieuse ou bien un retour constructif. </p>
      <form className="contact-form-container" ref={form} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="user_name" />
        <label>Entreprise</label>
        <input type="text" name="user_entreprise" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea className="contact-msg" name="message" />
        <button className="contact-form-submit-btn" type="submit" >Envoyer</button>
      </form>
      <div className="modal-bg">
        <div className="modal-inner">
          <p>Message bien envoyé merci !</p>
          <button className='modal-inner-ok-btn' onClick={()=>{modalToggle()}}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Contact