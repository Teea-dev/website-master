import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Waitlist from './components/waitlist/waitlist';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='join' element={<Waitlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
