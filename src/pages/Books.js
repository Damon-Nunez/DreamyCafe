import React from "react"
import Navbar from "../components/Navbar"
import './Books.css'
import {Row,Col,Container} from 'react-bootstrap'
import {Carousel} from 'antd'
import Martian from '../images/Martian.webp'
import EnderGame from '../images/EnderGame.jpg'
import Dune from '../images/Dune.jpg'
import hitchhiker from '../images/hitchhiker.jpg'
import RedRising from '../images/RedRising.jpg'
import SevenSeaSaga from '../images/SevenSeaSaga.jpg'
import LordRing from '../images/LordRing.jpg'
import IceAndFire from '../images/IceAndFire.jpg'
import HarryPotte from '../images/HarryPotte.jpg'
import Solitude from '../images/Solitude.jpg'
import Beloved from '../images/Beloved.jpg'
import HouseMango from '../images/HouseMango.jpg'
import HouseOfSpirits from '../images/HouseOfSpirits.jpg'
 const Books = () => {
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
          <h1 className="header"> Why Books? </h1>
          <p className="paragraphStyle"> We advertise and promote books in our cafe because it allows our customer
          to take a break from social media and the pressures of the world to explore the vast realm of fiction.
          We offer many different genres centered around dreams,imagination, and space but we have oteher genres 
          to fit people's preferences. Please give a book a chance while you enjoy our vast Menu! Allow us to show you some
          genres. </p>
          </Col>
        </Row>
      </Container>
      <h1 className="header"> 📗 Here are some popular genres and books!! 📕</h1>
      <Container className="secondContainer">
        <Row>
          <Col sm={12} md={12} lg={4}>
            <h1 className="carouselTitle"> 👾 Sci-Fi!!🧬 </h1>
          <div className="carouselDesign">
              <Carousel autoplay
                dots={true}
                dotPosition='bottom'
                effect="fade"
                pauseOnHover={true}
                draggable
              >
                <div>
                  <img className="carouselImage" src= {Martian}/>
                  <h1 className="carouselCaption"> The Martian </h1>
                </div>
                <div>
                  <img className="carouselImage" src={EnderGame}/>
                  <h1 className='carouselCaption'> Ender Game </h1>
                </div>
                <div>
                  <img className="carouselImage" src={Dune}/>
                  <h1 className="carouselCaption"> Dune </h1>
                </div>
                <div>
                  <img className="carouselImage" src={hitchhiker}/>
                  <h1 className='carouselCaption'> HH.G.T.H.G</h1>
                </div>
              </Carousel>
          </div>
          </Col>

          <Col sm={12} md={12} lg={4}>
          <h1 className="carouselTitle"> 🌠 Fantasy! 🧙🏼‍♂️</h1>
          <div className="carouselDesign">
          <Carousel autoplay
                dots={true}
                dotPosition='bottom'
                effect="fade"
                pauseOnHover={true}
                draggable
              >
                  <div>
                    <img className="carouselImage" src={RedRising}/>
                    <h1 className="carouselCaption"> Red Rising!!</h1>
                  </div>
                  <div>
                    <img className="carouselImage" src={SevenSeaSaga}/>
                    <h1 className="carouselCaption"> S.S.S </h1>
                  </div>
                  <div>
                    <img className="carouselImage" src={LordRing}/>
                    <h1 className="carouselCaption"> L.O.T.R</h1>
                  </div>
                  <div>
                    <img className="carouselImage" src={IceAndFire}/>
                    <h1 className="carouselCaption"> IceAndFire</h1>
                  </div>
                  <div>
                    <img className="carouselImage" src={HarryPotte}/>
                    <h1 className="carouselCaption"> Harry Potter</h1>
                  </div>
                </Carousel>
          </div>
          </Col>

          <Col sm={12} md={12} lg={4}>
          <h1 className="carouselTitle">MagicRealism💥</h1>
          <div className="carouselDesign">
          <Carousel autoplay
                dots={true}
                dotPosition='bottom'
                effect="fade"
                pauseOnHover={true}
                draggable
              >
                <div>
                  <img className="carouselImage" src={Solitude}/>
                  <h1 className="carouselCaption"> Solitude </h1>
                </div>
                <div>
                  <img className="carouselImage" src={Beloved}/>
                  <h1 className="carouselCaption">Beloved</h1>
                </div>
                <div>
                  <img className="carouselImage" src={HouseMango}/>
                  <h1 className="carouselCaption"> H.O.M</h1>
                </div>
                <div>
                  <img className="carouselImage" src={HouseOfSpirits}/>
                  <h1 className="carouselCaption">H.O.S</h1>
                </div>

                </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
      <h1 className="headerTwo"> Interested? 🧭 Visit Us at 1387 YouveBeenDuped Street 🗺️ </h1>
      </section>
    </div>
  )
}

export default Books
