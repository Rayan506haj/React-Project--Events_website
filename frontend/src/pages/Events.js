import React, { useState, useEffect } from "react";
import axios from "axios";
import ComboBox from "../Components/ComboBox";
import '../styles/Events.css';
import { Link, useNavigate } from "react-router-dom";


const Events = () => {

  const [branchId, setBranchId] = useState("");
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (branchId) {
      axios.get(`http://localhost:5000/events/branch/${branchId}`)
        .then(res => {
          console.log("Database Data:", res.data); 
          setEvents(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [branchId]);



  const handleDelete = async (Eid) => {
    try {
      await axios.delete(`http://localhost:5000/events/${Eid}`);
      setEvents(events.filter((p) => p.Eid !== Eid));
    } catch (err) {
      console.log(err);
    }
  };


  const handleBookClick = (Eid) => {
    navigate(`/booking/${Eid}`); 
  };


  const handleClear = async () => {
    if (window.confirm("Are you sure you want to delete ALL events?")) {
      try {
        await axios.delete(`http://localhost:5000/events`);
        
        
        setEvents([]); 
        
        alert("All records deleted successfully");
      } catch (err) {
        console.log(err);
        alert("Failed to delete records");
      }
    }
  };

  return ( 

    <div>
      <h1>Display Events based on selected Branch</h1>
      <ComboBox onSelectChange={setBranchId} value={branchId} />
      <br/>
      <br/>

      <button className="addHome">
        <Link to="/AddEvent"
        style={{
          color: "inherit",
          textDecoration: "none",
        }}>
          
          Add +
        </Link>  
      </button>
      <button
      className="delete"
      onClick={() => handleClear()}
      >
        Clear
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {events.map(event => (
              <tr key={event.Eid}>
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>


                <td>

                <button
                    className="delete"
                    onClick={() => handleDelete(event.Eid)}  
                  >
                    Delete
                  </button>

                  <button className="update">
                    <Link to={`/UpdateEvent/${event.Eid}`}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}>  
                      Update
                    </Link>
                      
                    </button>
                    <button className="book">
                      <Link to={`/Booking/${event.Eid}`}
                        style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                      onClick={() => handleBookClick(event.Eid)}>  
                        Book Now
                      </Link>
                    </button>


                </td>
              </tr>
            ))}

        </tbody>
      </table>

      
                      
      
    </div>


   );
}
 
export default Events;