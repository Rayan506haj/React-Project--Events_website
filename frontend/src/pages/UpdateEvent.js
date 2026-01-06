import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const UpdateEvent = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [event, setEvent] = useState({
        name: "",
        description: "",
        date:"",
        time:"",
        branch:"",
    });

    const [error, setError] = useState(false);

    // Fetch one event
    useEffect(() => {
        axios
      .get(`https://react-project-events-website.onrender.com/events/onerecord/${id}`)
      .then((res) => {
        setEvent({
          name: res.data.name,
          description: res.data.description,
          date: res.data.date,
          time: res.data.time,
          branch: res.data.branch,
        });

      })
      .catch((err) => console.log(err));
    }, [id]);

    // Update form fields
    const handleChange = (e) => {
        setEvent((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
    
        try {
          await axios.put(`https://react-project-events-website.onrender.com/events/${id}`, {
                name: event.name,
                description: event.description,
                date: event.date,
                time: event.time,
                branch: event.branch,
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
                <h1>Update Event</h1>

                <input
                type="text"
                placeholder="Event Name"
                name="name"
                value={event.name}
                onChange={handleChange}
                />
                <br/>
                <br/>

                <input
                type="text"
                placeholder="Description"
                name="description"
                value={event.description}
                onChange={handleChange}
                />
                <br/>
                <br/>

                <input
                type="text"
                placeholder="Date"
                name="date"
                value={event.date}
                onChange={handleChange}
                />
                <br/>
                <br/>

                <input
                type="text"
                placeholder="Time"
                name="time"
                value={event.time}
                onChange={handleChange}
                />
                <br/>
                <br/>


                <button onClick={handleClick}>Update</button>
                {error && "Something went wrong!"}
                <br/>
                <br/>

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
 
export default UpdateEvent;