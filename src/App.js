import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    setVisits(visits => visits + 1);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<About visits={visits} />} />
          <Route path="/contact" element={<Contact visits={visits} />} />
          <Route path="/" element={<Home visits={visits} />} />
        </Routes>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
