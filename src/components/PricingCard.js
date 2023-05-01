import "./PricingCard.css"
import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
      <h3>- Basic-</h3>
      <span className="bar"></span>
      <p className="btc">$ 100</p>
      <p>- 3 Days -</p>
      <p>- 3 Pages -</p>
      <p>- featued -</p>
      <p>responsive Design</p>
      <Link to="/" className="btn">PURCHACE NOW</Link>
      </div>
      <div className="card-container">
      <h3>- Basic-</h3>
      <span className="bar"></span>
      <p className="btc">$ 100</p>
      <p>- 3 Days -</p>
      <p>- 3 Pages -</p>
      <p>- featued -</p>
      <p>responsive Design</p>
      <Link to="/" className="btn">PURCHACE NOW</Link>
      </div>
      <div className="card-container">
      <h3>- Basic-</h3>
      <span className="bar"></span>
      <p className="btc">$ 100</p>
      <p>- 3 Days -</p>
      <p>- 3 Pages -</p>
      <p>- featued -</p>
      <p>responsive Design</p>
      <Link to="/" className="btn">PURCHACE NOW</Link>
      </div>
    </div>
  )
}

export default PricingCard
