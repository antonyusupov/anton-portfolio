import React from 'react';
import './App.css';
import {Navbar, Home, About, Contact, Portfolio, Progress,Resume, Services} from './containers';

function App() {
  return (
    <div className='App' id='App'>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Progress />
      <Contact />

    </div>
  )
}

export default App;