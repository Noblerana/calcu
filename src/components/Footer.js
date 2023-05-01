import "./FooterStyles.css"
import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="left">
      <div className="location">
      <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
      <div>
         <p>123 Housing Society</p>
         <p>Uganda</p>
      </div>
      </div>
      <div className="Phone">
      <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
      +256-7864-98251</h4></div>
      <div className="email">
      <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
      info@gmail.com</h4>
      </div>
      </div>
      
      <div className="right">
      <h4>About the company</h4>
      <p> this is  me Murii . CEO & founder of Noblinks. i enjoy discusing  new projects and design  challanges.</p>
      <div className="social">
      <FaFacebook size={20} style={{color:"#fff", marginRight: "2rem"}}/>
      <FaTwitter size={20} style={{color:"#fff", marginRight: "2rem"}}/>
      <FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem"}}/>
      </div>
      </div>
    
      
      </div>
    </div>
  )
}

export default Footer
