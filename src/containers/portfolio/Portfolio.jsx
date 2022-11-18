import React from 'react';
import image1 from '../../assets/homebg.jpg';
import image2 from '../../assets/servicesbg.jpg';
import './portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h2>portfolio</h2>
      <div className="portfolio__content section__big-padding">
        <h3>Chect Out Some of My Works</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, asperiores? Veritatis, reprehenderit possimus facilis perspiciatis est dicta praesentium blanditiis porro!</p>
      </div>
      <div className="portfolio__images-container section__big-padding">
        <div className="portfolio__image-container">
          <img src={image1} alt='universeimage' />
        </div>
        <div className="portfolio__image-container">
          <img src={image2} alt='universeimage' />
        </div>
        <div className="portfolio__image-container">
          <img src={image2} alt='universeimage' />
        </div>
        <div className="portfolio__image-container">
          <img src={image2} alt='universeimage' />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;