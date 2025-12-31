import React ,{useState} from "react";
import img from '../assets/img.jpg';
import '../styles/Contact.css';
import { Link, useNavigate } from "react-router-dom";


function Contact() {
    
  
    return (
      <div className="contact">
        <div className="leftSide" style={{ backgroundImage: `url(${img})` }} ></div>
        <div className="rightside">
          <p>Pease fill the form by clicking on the button to recieve our all events </p>
          <button className="b">
            <Link to="/AddClient"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}>
              Add your information
            </Link>
          </button>
        </div>
      </div>
      
        
    );
  }
  
  export default Contact;
  