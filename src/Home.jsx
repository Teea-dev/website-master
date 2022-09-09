import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Partners from './components/partners/Partners';
import Testimonies from './components/testimonies/Testimonies';
import Footer from './components/footer/Footer';
import Waitlist from './components/waitlist/waitlist';

function Home() {
  return (
    <div className="App">
      {/* <Nav />
      <Header />
      <About />
      <Services />
      <Partners />
      <Testimonies />
      <Footer /> */}
      <Waitlist />
    </div>
  );
}

export default Home;
