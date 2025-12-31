import axios from "axios";
import React, { useState } from "react";
import img from '../assets/img.jpg';
import { Link, useNavigate } from "react-router-dom";

const AddClient = () => {

    const [client, setClient] = useState({
            name: "",
            email: "",
            phone:"",
            
    });

    const [error, setError] = useState(false);

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setClient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await axios.post("http://localhost:5000/client", {
          name: client.name,
          email: client.email,
          phone: client.phone,
        });
        navigate("/contact");
              } catch (err) {
                console.log(err);
                setError(true);
              }
    };


    return (

        <div className="contact">
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
        </div>

    );
}
export default AddClient;