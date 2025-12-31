import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ComboBox from "../Components/ComboBox";
 
const AddEvent = () => {


    const [event, setEvent] = useState({
        name: "",
        description: "",
        date:"",
        time:"",
        branch:"",
        
    });

    const [error, setError] = useState(false);

    const [selectedValue, setSelectedValue] = useState("");
      
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleDropdownChange = (value) => {
        setSelectedValue(value);
        setEvent((prev) => ({ ...prev, event: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await axios.post("http://localhost:5000/events", {
          name: event.name,
          description: event.description,
          date: event.date,
          time:event.time,
          branch: selectedValue,
        });
        navigate("/Events");
              } catch (err) {
                console.log(err);
                setError(true);
              }
    };

     
    return ( 

        <div className="app">
            <div className="form">
                <h1>Add New Event</h1>
            
                <form onSubmit={handleSubmit}>
                    <input name="name" placeholder="Name" value={event.name} onChange={handleChange} required />
                    <input name="description" placeholder="Description" value={event.description} onChange={handleChange} required />
                    <input name="date" placeholder="Date"  value={event.date} onChange={handleChange} required />
                    <input name="time" placeholder="Time"  value={event.time} onChange={handleChange} required />
                    <ComboBox onSelectChange={handleDropdownChange} />
                    <button type="submit">Add Event</button>
                    {error && <p>Something went wrong!</p>}
                </form>

                <Link to="/events"
                    style={{
                        color: "#ffcc00",
                                    
                    }}>
                    See all Events
                </Link>
            
            </div>
        </div>


        
    );
}
 
export default AddEvent;