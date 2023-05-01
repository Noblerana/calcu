import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./NavbarStyle.css";

const  Navsec = () => {
    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor)
  return (
    <div className={color ? "header header-bg": "header"}>
      <Link to="/">
      <h1>noble.</h1>
      </Link>
      <ul className='nav-menu'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/journey">journey</Link></li>
      <li><Link to="/Mission">Mission</Link></li>
      <li><Link to="/Program">Program</Link></li>

      </ul>
    </div>
  )
}

export default  Navsec
