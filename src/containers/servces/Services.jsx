import React from 'react';
import {FaGlobe, FaPortrait, FaPrint} from 'react-icons/fa';
import './services.css';

function Services() {
  return (
    <div className='services' id='services'>
      <div className="services__container">
        <h2>services</h2>
        <div className="services__info section__big-padding">
          <h3>what can i do for you?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptates unde cupiditate. Quisquam quo beatae repellendus laudantium nam accusamus porro.</p>
        </div>
        <div className="services__details">
          <div className="services__details-card">
            <span>< FaGlobe /></span>
            <h5>Website</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolorum recusandae fugit ratione debitis harum aperiam fuga dignissimos. Amet, tenetur?</p>
          </div>
          <div className="services__details-card">
            <span><FaPortrait /></span>
            <h5>Portfolio Website</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolorum recusandae fugit ratione debitis harum aperiam fuga dignissimos. Amet, tenetur?</p>
          </div>
          <div className="services__details-card">
            <span><FaPrint /></span>
            <h5>Landing Page</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolorum recusandae fugit ratione debitis harum aperiam fuga dignissimos. Amet, tenetur?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;