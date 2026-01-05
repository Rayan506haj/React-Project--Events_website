import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Footer.css";

const Footer = () => {
  return (
   <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />  <FacebookIcon /> 
      </div>
      <p> &copy; 2025 Veranda</p>
    </div>
  )
}

export default Footer