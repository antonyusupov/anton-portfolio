import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaLinkedin, FaCopyright } from "react-icons/fa";
import './contact.css';

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="contact__container">
        <h3>contact</h3>
        <div className="contact__container-content section__big-padding">
          <h4>i'd love to hear from you</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam amet, doloremque esse veniam nam excepturi ab ipsum necessitatibus rerum delectus!</p>
        </div>
        <div className="contact__container-form section__big-padding">
          <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Subject' />
            <textarea id="message" cols="20" rows="10" placeholder='Message'></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
        <div className="contact__container-links">
          <div className="contact__links-content">
            <div className="contact__links-content_social">
              <a href='#'><FaLinkedin/></a>
              <h6>LinkedIn</h6>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="contact__links-content_social">
              <a href='#'><FaInstagram/></a>
              <h6>Instagram</h6>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="contact__links-content_social">
              <a href='#'><FaGithub /></a>
              <h6>GitHub</h6>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="contact__social-links">
            <a href='https://twitter.com/AntonYusupov2'><FaTwitter /></a>
            <a href='https://github.com/antonyusupov'><FaGithub /></a>
            <a href='https://www.instagram.com/vopusuynotna/'><FaInstagram /></a>
            <a href='example@gmail.com'><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="contact__footer">
        <p><span><FaCopyright /> </span> Copyright AO 2022 </p>
        <p>Maid by <span> Atamyrat Ovlyakuliyev</span></p>
      </div>
    </div>
  )
}

export default Contact;