import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateBranch = () => {
    const { id } = useParams();
        const navigate = useNavigate();
    
        const [branch, setBranch] = useState({
            name: "",
            imageURL: "",
            
        });

        const [error, setError] = useState(false);

    // Fetch one branch
    useEffect(() => {
        axios
      .get(`http://localhost:5000/branches/onerecord/${id}`)
      .then((res) => {
        setBranch({
          name: res.data.name,
          imageURL: res.data.imageURL,
        });

      })
      .catch((err) => console.log(err));
    }, [id]);

     // Update form fields
     const handleChange = (e) => {
        setBranch((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
    
        try {
          await axios.put(`http://localhost:5000/branches/${id}`, {
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
                <h1>Update Branch</h1>
        
                <input
                type="text"
                placeholder="Branch Name"
                name="name"
                value={branch.name}
                onChange={handleChange}
                />
                <br/>
                <br/>
        
                <input
                type="text"
                placeholder="image URL"
                name="imageURL"
                value={branch.imageURL}
                onChange={handleChange}
                />
                <br/>
                <br/>

        
        
                <button onClick={handleClick}>Update</button>
                {error && "Something went wrong!"}
                <br/>
                <br/>
        
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
 
export default UpdateBranch;