import React from 'react';
import {FaGraduationCap, FaBookOpen} from 'react-icons/fa';
import './resume.css';

function Resume() {
  return (
    <div className='resume section__big-padding' id='resume'>
      <div className='resume__container'>
        <div className='resume__content'>
          <h3>resume</h3>
          <h4>More of my credentials</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium, repellat, neque voluptatem dolorum iste esse facere harum nulla deserunt corporis sed in sint velit cupiditate excepturi aliquam quisquam animi facilis debitis nesciunt ullam adipisci?</p>
        </div>
        <h5>work experiences</h5>
        <div className='resume__container-experience'>
          <div className="resume__container-experience_one">
            <div className="experience__one-date">
              <h6>Freelance</h6>
              <p>January 2020 - Present</p>
            </div>
            <div className="experience__one-icon">
              <FaGraduationCap />
            </div>
            <div className="experience__one-content">
              <span>Freelancer</span>
              <div className="experience__line"></div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quis sequi a atque quisquam esse?</p>
            </div>
          </div>
          <div className="resume__container-experience_two">
            <div className="experience__two-date">
              <h6>Cook</h6>
              <p>October 2017 - November 2019</p>
            </div>
            <div className="experience__two-icon">
            <FaGraduationCap />
            </div>
            <div className="experience__two-content">
              <span>Cook</span>
              <div className="experience__line"></div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quis sequi a atque quisquam esse?</p>
            </div>
          </div>
          <div className="resume__container-experience_three">
            <div className="experience__three-date">
              <h6>Waiter</h6>
              <p>September 2013 - March 2015</p>
            </div>
            <div className="experience__three-icon">
            <FaGraduationCap />
            </div>
            <div className="experience__three-content">
              <span>Waiter</span>
              <div className="experience__line"></div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quis sequi a atque quisquam esse?</p>
            </div>
          </div>
        </div>
        <h5>education</h5>
        <div className='resume__container-education'>
          <div className="resume__container-education_one">
              <div className="education__one-date">
                <h6>web development</h6>
                <p>February 2018 - Present</p>
              </div>
              <div className="education__one-icon">
                <FaBookOpen />
              </div>
              <div className="education__one-content">
                <span>Web Dvelopment</span>
                <div className="education__line"></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quis sequi a atque quisquam esse?</p>
              </div>
            </div>
            <div className="resume__container-education_two">
              <div className="education__two-date">
                <h6>Foreign Trade</h6>
                <p>October 2020 - Present</p>
              </div>
              <div className="education__two-icon">
                <FaBookOpen />
              </div>
              <div className="education__two-content">
                <span>Foreign Trade</span>
                <div className="education__line"></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quis sequi a atque quisquam esse?</p>
              </div>
            </div>
            <div className="resume__container-education_three">
              <div className="education__three-date">
                <h6>Tourism Hotel Management</h6>
                <p>September 2012 - May 2018</p>
              </div>
              <div className="education__three-icon">
                <FaBookOpen />
              </div>
              <div className="education__three-content">
                <span>Tourism Hotel Management</span>
                <div className="education__line"></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quis sequi a atque quisquam esse?</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;