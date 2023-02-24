
import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Books from './pages/Books';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
