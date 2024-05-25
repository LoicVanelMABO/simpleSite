import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

// import { BsSuitHeartFill  } from "react-icons/bs";
// import { AiFillHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
// https://react-icons.github.io/react-icons/icons/fc/

const Contact = () => {
    const Access_key = "fd48910f-0c92-4bff-97b1-78655b8ee2cc"
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", Access_key);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Votre Mail a été envoyé avec succès...");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Envoyez Nous un message <img src={msg_icon} alt="" /> </h3>
        <p>
        De tout temps, l'homme a tenté de comprendre puis de reproduire l'extraordinaire 
        machine qu'est l'être humain. Les premiers automates nous font sourire aujourd'hui.
        Les premiers ordinateurs également, mais un peu moins. Et lorsqu'un certain McCullogn, 
        aidé de Pitts, invente en 1943 le premier neurone formel, on ne rigole plus.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
            <li><img src={phone_icon} alt="" />+237 697 249 734</li>
            <li><img src={location_icon} alt="" />77 rue du carrefour Ndokotti<br/> Venant de pk 14 ou, pk08 ESG Cameroun</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Votre Nom</label>
            <input type="text" name='name' placeholder='Entrer votre nom...'  required/>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name='phone' placeholder='Entrer votre numéro...' required/>
            <label htmlFor="comment">Entrer votre message ici</label>
            <textarea name="comment" id="" rows="6" placeholder='Entrer votre message' required></textarea>
            <button className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>
            {result}
        </span>
      </div>
    </div>
  )
}

export default Contact
