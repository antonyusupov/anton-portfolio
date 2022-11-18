import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import './home.css';

function Home() {
  return (
    <div className='home section__big-padding' id='home'>
      <div className='home__content'>
        <div className='home__content-text'>
          <h3>Hello, World.</h3>
          <h2>I'm Atamyrat Ovlyakuliyev.</h2>
          <p>Web Developer</p>
          <a href='#about'>More About Me </a>
        </div>
      </div>
      <div className='home__social-links'>
        <a href='https://twitter.com/AntonYusupov2'><FaTwitter /></a>
        <a href='https://github.com/antonyusupov'><FaGithub /></a>
        <a href='https://www.instagram.com/vopusuynotna/'><FaInstagram /></a>
        <a href='example@gmail.com'><FaEnvelope /></a>
      </div>

    </div>
  )
}

export default Home;