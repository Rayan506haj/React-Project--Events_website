import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Booking = () => {

    const { Eid } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState({
            fullName: "",
            nbOfSeats: "",
            phone:"",
            event:Eid,
            
    });

    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post("http://localhost:5000/booking", book);
            setIsSubmitted(true);
            setTimeout(() => {
                navigate("/Events");
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
                    <h2>Thank you!</h2>
                    <p>Your booking for event {Eid} has been confirmed.</p>
                    <p>Redirecting you to events...</p>
                </div>
            ) : (
             <>

             <p> Please fill this form to confirm your reservation</p>  
             <form onSubmit={handleSubmit}>
                    <input name="fullName" placeholder="Full Name" value={book.fullName} onChange={handleChange} required />
                    <input name="phone" placeholder="Phone ../......" value={book.phone} onChange={handleChange} required />
                    <input name="nbOfSeats" type="number" placeholder="Number of seats"  value={book.nbOfSeats} onChange={handleChange} required />
                    <input type="text" value={book.event} disabled />                    
                    <button type="submit">Confirm Booking</button>
                    {error && <p>Something went wrong!</p>}
                </form>
                </>
            )}
                        </div>
                    
        );
    }
     
    export default Booking 
