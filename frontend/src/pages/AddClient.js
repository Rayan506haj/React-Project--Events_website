import axios from "axios";
import React, { useState } from "react";
import img from '../assets/img.jpg';
import { useNavigate } from "react-router-dom";

const AddClient = () => {

    const [client, setClient] = useState({
            name: "",
            email: "",
            phone:"",
            
    });
    const [, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);



    const navigate = useNavigate();
    
    const handleChange = (e) => {
      setClient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          
          await axios.post("http://localhost:5000/client", client);
          setIsSubmitted(true);
          setTimeout(() => {
              navigate("/contact");
          }, 2500);
      } catch (err) {
          console.log(err);
          setError(true);
      }
  };


    return (


      <div className="contact">
                {isSubmitted ? (
                <div className="success-message">
                    <h2>Thank you for sharing your information!</h2>
                    <p>Your will receive our new events by SMS.</p>
                    <p>Redirecting you to contact...</p>
                </div>
            ) : (
             <>          
            <div className="leftSide" style={{ backgroundImage: `url(${img})` }} ></div>
            <div className="rightSide">
                <p> Please fill this form to recieve new events via email and SMS message</p>  
                <form id="contact-form" >
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" value={client.name}  onChange={handleChange}/>
                    
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" value={client.email}  onChange={handleChange} />
        
                    <label htmlFor="phone">Phone number</label>
                    <input name="phone" placeholder="../......" type="text" value={client.phone} onChange={handleChange}/>
                    
                    <button type="submit" onClick = {handleSubmit}> Confirm</button>
                </form>
            </div>
            </>
            )}
        </div>
            

    );
}
export default AddClient;