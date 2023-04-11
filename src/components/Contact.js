import { useRef, useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
import "../css/contact.css";
import PressureWasher from "../pressure-washer.png";
import PressureWasher2 from "../pressure-washer (3).png";


export default function Contact(){
    const form = useRef();
    const [ email, setEmail ] = useState("")
    const [ name, setName ] = useState("")
    const [ message, setMessage ] = useState("")
    const text = "Send"
    const [ buttonText, setButtonText ] = useState(text)
  
    useEffect(()=> {
      const timer = setTimeout(()=> {
        setButtonText(text);
      }, 1000);
      return ()=> clearTimeout(timer);
    }, [buttonText])
    
    const sendEmail = (e) => {
      e.preventDefault();
  
    //   emailjs.sendForm('service_jl5t9qa', 'template_70h67rn', form.current, 'VJ9V-QIXr1w135O5H')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     })
        // .then(() => setName(""))
        // .then(() => setEmail(""))
        // .then(() => setMessage(""))
    };
  
    return (
      <div className="contact-container">
          <h1>Contact Us </h1>        
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
        <label>Email Address</label>
        <input type="email" name="user_email" placeholder="john@gmail.com" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <label>Details</label>
        <textarea name="message" placeholder="Add any additional relevant details" value={message} onChange={(e) => {setMessage(e.target.value)}}/>
        <button className="send-btn"type="submit" onClick={() => setButtonText("Sent!")}>{buttonText}</button>
      </form>
      <div className="left-pressure-about">
          <img alt="clean" src={PressureWasher}></img>
        </div>
        <div className="right-pressure-about">
          <img alt="clean" src={PressureWasher2}></img>
        </div>
      </div>
    );
  };