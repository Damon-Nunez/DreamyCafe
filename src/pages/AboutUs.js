import React from "react"
import Navbar from "../components/Navbar"
import {Row,Col,Container} from 'react-bootstrap'
import './AboutUs.css'
import Footer from "../components/Footer"
import FacebookIcon from '../images/Facebook.png'
import LinkedInIcon from '../images/LinkedIn.png'
import TwitterIcon from '../images/Twitter.png'
 const AboutUs = () => {
  return (
    <div className="backgroundLegal">
      <section className="wrapper">
      <Navbar/>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Container>
        <Row>
          <Col>
          <h1 className="header"> 🌌 More About Dreamy Cafe 🌌</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <h1 className="header"> Our Mission and Values! </h1>
          <p className="paragraphStyle">Our mission is to create a space where people can relax and explore their dreams while enjoying a cup of coffee or tea. We believe in promoting creativity, curiosity, and community.
          We value acceptance,passion, and creativity in many forms. We are a very open cafe to ideas and exploration like the vastness of space.🌌 </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <h1 className="header">History of DreamyCafe </h1>
          <p className="paragraphStyle"> So I wanted to make a cafe and I wanted to explore what a cafe with a priority of reading and dreaming. A sort
          of library Cafe. So I took those themes of reading,dreaming, and a space environment and combined it. For the name. It was quite a journey. To 
          get the unique name of "DreamyCafe"....I.... asked my friends on discord. Creativity 100.</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <h1 className="header"> Contact Information </h1>
          </Col>
        </Row>
        <Row className="emergency">
          <Col sm={12} md={12} lg={4}>
          <img className="SocialIcons" src= {LinkedInIcon}/>
          </Col>
          <Col sm={12} md={12} lg={4}>
          <img className='SocialIcons'src= {TwitterIcon}/>
          </Col>
          <Col sm={12} md={12} lg={4}>
          <img className="SocialIcons" src= {FacebookIcon}/>
          </Col>
        </Row>

        <Footer/> 
      </Container>   
      
      </section>
      </div>
  )
}

export default AboutUs
