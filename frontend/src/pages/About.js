import React from 'react'
import  '../styles/About.css'
import { FaCalendarAlt } from 'react-icons/fa'; 
import { FaClock } from 'react-icons/fa';
import { MdPhotoCamera } from 'react-icons/md';

const About = () => {
    return ( 
        <div className="about">
            <p>
            Welcome to Veranda, your digital window into the vibrant life of our restaurant.<br/>
            We believe dining should be more than just a meal—it should be an experience.<br/>
            That's why we created this platform: to keep you informed,inspired,and excited<br/>
            about everything happening under our roof.
            </p>
            <br/>
            <div className="ico">
                <p><span><FaCalendarAlt/></span>Browse upcoming events</p>
                <p><span><FaClock/></span>Plan your visit around what excites you most</p>
                <p><span><MdPhotoCamera/></span>Relive past events through photos and highlights</p>
                <br/>
                <p>📍Tripoli    📍Beirut</p>
                
            </div>

        </div>
    );
}
 
export default About;