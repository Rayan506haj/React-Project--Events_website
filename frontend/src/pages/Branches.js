import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/Branches.css'

const Branches = () => {

  const [branches, setBranches] = useState([]);
  
    useEffect(() => {
      const fetchAllBranches=async()=>{
        try{
          const res = await axios.get ("http://localhost:5000/branches");
          setBranches(res.data);
        }catch(err){
          console.log(err);
        }
      };
      fetchAllBranches();
    },[]);

    const handleDelete = async (Bid) => {
      try {
        await axios.delete(`http://localhost:5000/branches/${Bid}`);
        setEvents(branches.filter((p) => p.Bid !== Bid));
      } catch (err) {
        console.log(err);
      }
    };

    const handleClear = async () => {
      if (window.confirm("Are you sure you want to delete ALL branches?")) {
        try {
          await axios.delete(`http://localhost:5000/branches`);
          
          
          setBranches([]); 
          
          alert("All records deleted successfully");
        } catch (err) {
          console.log(err);
          alert("Failed to delete records");
        }
      }
    };


  return ( 

    <div className="container">
      <h1 className="page-title">Our Branches</h1>

      <button className="addHome">
        <Link to="/AddBranch"
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
      
      <div className="card-grid">
        {branches.map((branch) => (
          <article className="branch-card" key={branch.Bid}>
            

            <div className="card-image-wrapper">
              <img 
                src={`/images/${branch.imageURL}`}
                alt={branch.name} 
              />
            </div>

            <div className="card-content">
              <h3 className="branch-name">{branch.name}</h3>
              <br/>
              <button className="addHome">
              <Link to={`/UpdateBranch/${branch.Bid}`}
              style={{
              color: "inherit",
              textDecoration: "none",
              }}>        
              Update
              </Link> 
            </button>
            <button
              className="delete"
              onClick={() => handleDelete(branch.Bid)}  
            >
                    Delete
            </button>

            </div>
          </article>
        ))}
      </div>
    </div>


   );
}
 
export default Branches;