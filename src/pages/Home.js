import React from 'react'
import { Link } from 'react-router-dom'
import {Row,Col,Container} from 'react-bootstrap'
import "./Home.css"
 const Home = () => {
  return (
    <div>
        <h1> HELLO </h1>
        <ul>
            <Link to="/"><li> Home </li></Link>
            <Link to='/Menu'> <li> Menu </li></Link>
            <Link to='/AboutUs'> <li> AboutUs</li></Link>
            <Link to='/Books'> <li> Books</li></Link>
        </ul>
    </div>
  )
}
export default Home;