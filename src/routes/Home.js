import React from 'react';
import { Link } from 'react-router-dom';

import Journey from '../routes/journey.js';
import Mission from '../routes/Mission.js';
import Program from '../routes/program.js';

const Home = () => {
    const ima ='./images/Nol.jpg'
  return (
    <div>
    <div className="App">
    <header className="App-header">
    <img src={ima} alt=''/>
       
      <h3>IF YOU KNOW ME, YOU KNOW MY STORY</h3>
      
      <Link to="/journey" className='butt' >Explore</Link>
    </header>
    
      <div className='nav'>
        <Journey/>
        <Mission/>
        <Program/>
      </div>
    
  </div>
    </div>
  )
}

export default Home
