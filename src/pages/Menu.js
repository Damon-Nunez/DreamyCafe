import React from "react"
import Navbar from "../components/Navbar"
import './Menu.css'
import {Carousel} from 'antd'
import {Row,Col,Container} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import Coffee from '../images/Coffee.jpg'
import Bread from '../images/Bread.jpg'
import Tea from '../images/Tea.jpg'
import Croissant from '../images/CroissantMenu.jpg'
import BLT from '../images/BLT.jpg'
import Cake from '../images/Cake.jpg'
import Footer from '../components/Footer.js'
 const Menu = () => {
  return (
    <div className="backgroundLegalMenu">
      <section className="wrapper">
        <Navbar/>
        <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title"></div>
      <h1 className="header"> Welcome to our Menu!</h1>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={3}>
          <ul className="sideMenu">
        <a href="/"><li className="sideMenuItems">Coffee</li></a>
        <a href="/"><li className="sideMenuItems">Tea</li></a>
        <a href="/"><li className="sideMenuItems">Baked Goods</li></a>
        <a href="/"><li className="sideMenuItems">Pastries</li></a>
        <a href="/"><li className="sideMenuItems">Sandwiches</li></a>
        <a href="/"><li className="sideMenuItems">Desserts</li></a>
      </ul>
          </Col>
          <Col sm={12} md={12} lg={3}>
          <div>
            <Card className="cardDesign">
              <Card.Img className="cardImage" src={Coffee}/>
              <Card.ImgOverlay>
                <Card.Text>
                  <h2 className="cardCaptionExclusive">Coffee!</h2>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
          <div className="position">
            <Card className="cardDesign">
              <Card.Img className="cardImage" src={Tea}/>
              <Card.ImgOverlay>
                <Card.Text>
                  <h2 className="cardCaptionExclusive">Tea!🍵</h2>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={7}>
          <div className="secondRowPosition">
            <Card className="cardDesign">
              <Card.Img className="cardImage" src={Bread}/>
              <Card.ImgOverlay>
                <Card.Text>
                  <h2 className="cardCaptionExclusive"> Baked Goods!</h2>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          </Col>
          <Col sm={12} md={12} lg={5}>
          <div className="secondRowPositionTwo">
            <Card className="cardDesign">
              <Card.Img className="cardImage" src={Croissant}/>
              <Card.ImgOverlay>
                <Card.Text>
                  <h2 className="cardCaptionExclusive"> Pastries!</h2>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          </Col>
        </Row>
        <Row>
        <Col sm={12} md={12} lg={7}>
          <div className="thirdRowPosition">
            <Card className="cardDesign">
              <Card.Img className="cardImage" src={BLT}/>
              <Card.ImgOverlay>
                <Card.Text>
                  <h2 className="cardCaptionExclusive"> Sandwiches!</h2>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          </Col>
          <Col sm={12} md={12} lg={5}>
          <div className="thirdRowPositionTwo">
            <Card className="cardDesign">
              <Card.Img className="cardImage" src={Cake}/>
              <Card.ImgOverlay>
                <Card.Text>
                  <h2 className="cardCaptionExclusive"> Desserts!</h2>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
      </section>
    </div>
  )
}

export default Menu
