import React from 'react'
import  '../styles/Home.css'
import Backgroundimg from '../assets/Backgroundimg.jpg';
import {Link} from 'react-router-dom';



const Home = () => {
    return (
        

          <div >
          <div className='home'  style={{ backgroundImage: `url(${Backgroundimg})` }}>
            <p  className='hero_card'>Welcome to Veranda website!</p> 
            
             your destination to choose the event you like to attend according to your mood
            
            <p>1000+ Guests Served<br/>500+ Events Hosted</p>

            <Link to="/Events"> Explore More </Link>

           </div>
           </div>
        
    );
}
 
export default Home;