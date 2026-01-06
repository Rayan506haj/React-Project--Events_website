import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddBranch = () => {


    const [branch, setBranch] = useState({
        name: "",
        imageURL: "",
             
    });

    const [error, setError] = useState(false);

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setBranch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await axios.post("https://react-project-events-website.onrender.com/branches", {
          name: branch.name,
          imageURL: branch.imageURL,
        });
        navigate("/Branches");
              } catch (err) {
                console.log(err);
                setError(true);
              }
    };
    return (  

        <div className="app">
            <div className="form">
                <h1>Add New Branch</h1>
            
                <form onSubmit={handleSubmit}>
                    <input name="name" placeholder="Name" value={branch.name} onChange={handleChange} required />
                    <input name="imageURL" placeholder="image URL" value={branch.imageURL} onChange={handleChange} required />
                    <button type="submit">Add Branch</button>
                    {error && <p>Something went wrong!</p>}
                </form>

                <Link to="/Branches"
                    style={{
                        color: "#ffcc00",
                                    
                    }}>
                    See all Branches
                </Link>
            
            </div>
        </div>
    );
}
 
export default AddBranch;