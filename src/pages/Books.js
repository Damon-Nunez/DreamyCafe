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
import AOT from '../images/AOT.jpg'
import BlueExorcist from '../images/BlueExorcist.jpg'
import DemonSlayer from '../images/DemonSlayer.jpg'
import OPM from '../images/OPM.jpg'
import TPM from '../images/TPM.webp'

import Slime from '../images/Slime.jpg'
import ShieldHero from '../images/ShieldHero.jpg'
import SAO from '../images/SAO.jpg'
import ReZero from '../images/ReZero.jpg'
import NGNL from '../images/NGNL.jpg'

import YOO from '../images/YOO.png'
import unOrdinary from '../images/unOrdinary.jpg'
import TOG from '../images/TOG.jpg'
import Noblesse from '../images/Noblesse.jpg'
import GOH from '../images/GOH.jpg'

import Footer from '../components/Footer.js'
 const Books = () => {
  return (
    <div className="backgroundLegalAGAIN">
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
        <h1 className="headerTwo"> We have non-space related books as well!! </h1>
        <Row>
          <Col sm={12} md={12} lg={4}>
            <h1 className="carouselTitle"> Manga! </h1>
            <div className="carouselDesign">
            <Carousel autoplay
                dots={true}
                dotPosition='bottom'
                effect="fade"
                pauseOnHover={true}
                draggable
              >
                <div>
                  <img className="carouselImage" src={AOT}/>
                  <h1 className="carouselCaption">A.O.T</h1>
                </div>
                <div>
                  <img className="carouselImage" src={BlueExorcist}/>
                  <h1 className="carouselCaption">Blue Exorcist</h1>
                </div>
                <div>
                  <img className="carouselImage" src={DemonSlayer}/>
                  <h1 className="carouselCaption">DemonSlayer</h1>
                </div>
                <div>
                  <img className="carouselImage" src={OPM}/>
                  <h1 className="carouselCaption">OPM</h1>
                </div>
                <div>
                  <img className="carouselImage" src={TPM}/>
                  <h1 className="carouselCaption">T.P.M</h1>
                </div>
                </Carousel>
            </div>
          </Col>

          <Col sm={12} md={12} lg={4}>
            <h1 className="carouselTitle">📕Light Novels</h1>
            <div className="carouselDesign">
            <Carousel autoplay
                dots={true}
                dotPosition='bottom'
                effect="fade"
                pauseOnHover={true}
                draggable
              >
                <div>
                  <img className="carouselImage" src={NGNL}/>
                  <h1 className="carouselCaption">N.G.N.L</h1>
                </div>
                <div>
                  <img className="carouselImage" src={ReZero}/>
                  <h1 className="carouselCaption">ReZero</h1>
                </div>
                <div>
                  <img className="carouselImage" src={SAO}/>
                  <h1 className="carouselCaption">SAO</h1>
                </div>
                <div>
                  <img className="carouselImage" src={ShieldHero}/>
                  <h1 className="carouselCaption">ShieldHero</h1>
                </div>
                <div>
                  <img className="carouselImage" src={Slime}/>
                  <h1 className="carouselCaption">T.T.I.G.R.A.A.S</h1>
                </div>
                </Carousel>
            </div>
          </Col>

          <Col sm={12} md={12} lg={4}>
            <h1 className="carouselTitle"> WebComics </h1>
            <div className="carouselDesign">
            <Carousel autoplay
                dots={true}
                dotPosition='bottom'
                effect="fade"
                pauseOnHover={true}
                draggable
              >
                <div>
                  <img className="carouselImage" src={YOO}/>
                  <h1 className="carouselCaption">I Love YOO</h1>
                </div>
                <div>
                  <img className="carouselImage" src={unOrdinary}/>
                  <h1 className="carouselCaption">unOrdinary</h1>
                </div>
                <div>
                  <img className="carouselImage" src={TOG}/>
                  <h1 className="carouselCaption">T.O.G</h1>
                </div>
                <div>
                  <img className="carouselImage" src={Noblesse}/>
                  <h1 className="carouselCaption">Noblesse</h1>
                </div>
                <div>
                  <img className="carouselImage" src={GOH}/>
                  <h1 className="carouselCaption">G.O.H</h1>
                </div>
                </Carousel>
            </div>
          </Col>


        </Row>
      </Container>
      <h1 className="headerTwo"> Interested? 🧭 Visit Us at 1387 YouveBeenDuped Street 🗺️ </h1>
      <Footer/>
      </section>
    </div>
  )
}

export default Books
