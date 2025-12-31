import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import Branches from './pages/Branches';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Home from './pages/Home';
import About from './pages/About';
import AddEvent from './pages/AddEvent';
import UpdateEvent from './pages/UpdateEvent';
import AddClient from './pages/AddClient';
import Booking from './pages/Booking';
import AddBranch from './pages/AddBranch';
import UpdateBranch from './pages/UpdateBranch';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div  className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Branches" element={<Branches />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/AddEvent" element ={<AddEvent />}/>
          <Route path="/UpdateEvent/:id" element ={<UpdateEvent />}/>
          <Route path="/AddClient" element ={<AddClient />}/>
          <Route path="/Booking/:Eid" element ={<Booking />}/>
          <Route path="/AddBranch" element ={<AddBranch />}/>
          <Route path="/UpdateBranch" element={<UpdateBranch />} />
          <Route path="/UpdateBranch/:id" element ={<UpdateBranch />}/>

        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;