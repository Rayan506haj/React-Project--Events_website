import React, { useState, useEffect } from "react";
import '../styles/ComboBox.css'

function ComboBox({ value, onSelectChange }) {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch("https://react-project-events-website.onrender.com/branches")
      .then((response) => response.json())
      .then((data) => setBranches(data))
      .catch((error) => console.error("Error fetching branches:", error));
  }, []);

  const handleChange = (event) => {
    onSelectChange(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value="">Select a Branch</option>

      {branches.map((branch) => (
        <option key={branch.Bid} value={branch.Bid}>
          {branch.name}
        </option>
      ))}
    </select>
  );
}

export default ComboBox;
