import React from 'react';
import {FaPencilRuler, FaLightbulb, FaCoffee, FaCode, FaMoon, FaFireExtinguisher} from 'react-icons/fa';
import './progress.css';

function Progress() {
  return (
    <div className='progress' id='progress'>
      <div className="progress__container">
        <div className="progress__content">
          <span><FaPencilRuler /></span>
          <h5>15</h5>
          <p>Projects Completed</p>
        </div>
        <div className="progress__content">
          <span><FaLightbulb /></span>
          <h5>50</h5>
          <p>crazy ideas</p>
        </div>
        <div className="progress__content">
          <span><FaCoffee /></span>
          <h5>1400</h5>
          <p>coffe cups</p>
        </div>
        <div className="progress__content">
          <span><FaCode /></span>
          <h5>5000+</h5>
          <p>coded lines</p>
        </div>
        <div className="progress__content">
          <span><FaMoon /></span>
          <h5>200</h5>
          <p>sleeples nights</p>
        </div>
        <div className="progress__content">
          <span><FaFireExtinguisher /></span>
          <h5>1000+</h5>
          <p>burn outs</p>
        </div>
      </div>
    </div>
  )
}

export default Progress;