import React from 'react';
import profilePic from '../../assets/antonProfile.JPG';
import './about.css';

function About() {
  return (
    <div className='about section__big-padding' id='about'>
      <div className='about__about-content'>
        <div className='about__about-content_image'>
          <img src={profilePic} alt='profilepicture'/>
        </div>
        <div className='about__about-content_text'>
          <h2>About</h2>
          <h4>Breif presentation about me.</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, quaerat quasi ipsam veniam fugit ullam dicta tenetur facilis eum eligendi quos. Eius veritatis odio voluptates? Veritatis blanditiis quod commodi maxime, nisi quisquam reiciendis voluptas, modi similique possimus, adipisci culpa incidunt?</p>
        </div>
      </div>
      <div className='about__content'>
        <div className='about__content-profile'>
          <h3>Profile</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos reiciendis, maiores ipsa ab molestias dolorum a dolores, veniam provident voluptatem nobis. Consequuntur, nisi at?</p>
          <h5>Fullname :</h5>
          <span>Atamyrat Ovlyakuliyev</span>
          <h5>birth date :</h5>
          <span>December 10, 1992</span>
          <h5>job :</h5>
          <span>Web Developer</span>
          <h5>email :</h5>
          <span>antnyspv@gmail.com</span>
          <h5>github :</h5>
          <span>https://github.com/antonyusupov</span>
        </div>
        <div className='about__content-skills'>
          <h3>Skills</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur vitae sequi vero architecto cum illo mollitia maxime placeat illum optio.</p>
          <h5>html</h5>
          <progress id='file' max='100' value={80}>80%</progress>
          <h5>css</h5>
          <progress id='css' max='100' value={75}>750%</progress>
          <h5>javaScript</h5>
          <progress id='javascript' max='100' value={50}>50%</progress>
          <h5>react</h5>
          <progress id='react' max='100' value={45}>45%</progress>
          <h5>python</h5>
          <progress id='python' max='100' value={40}>40%</progress>
          <h5>django</h5>
          <progress id='django' max='100' value={50}>50%</progress>
        </div>
      </div>
      <div className='about__btn'>
        <a href='#contact'>hire me</a>
        <a href='#contact'>download cv</a>
      </div>
    </div>
  )
}

export default About;