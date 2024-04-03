import React from "react";
import { Link } from 'react-router-dom';
import "./homepage.css";

function HomePage() {
  return (
    <div className="homepage">
      <h1>Home Page</h1>
      <div className="category-container">
        <div className="category-box">
          <h2>Infants</h2>
          <p className="category-number">18</p>
        </div>
        <div className="category-box">
          <h2>Toddlers</h2>
          <p className="category-number">22</p>
        </div>
      </div>
      <div className="category-container">
        <div className="category-box">
          <h2>Preschool</h2>
          <p className="category-number">20</p>
        </div>
        <div className="category-box">
          <h2>School Age</h2>
          <p className="category-number">15</p>
        </div>

        
      </div>
      <div className="enroll-button-container">
          <Link to="/enroll" className="enroll-button">Enroll Child</Link>
        </div>
      <div className="total-style">
        Total: 75
      </div>
    </div>
  );
}

export default HomePage;
