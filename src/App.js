import './App.css';
import React from 'react';
import Home from './pages/Home';
import { Menu } from './pages/Menu';
import { AboutUs } from './pages/AboutUs';
import { Books } from './pages/Books';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
  Switch,
} from 'react-router-dom'

function App() {
  return (
  <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path='/AboutUs' element={<AboutUs/>}/>
    <Route exact path='/Books' element={<Books/>}/>
    <Route exact path ='/Menu' element={<Menu/>}/>
    </Routes>
  </Router>
  );
}

export default App;
