import "./Home.css"
import Navbar from "../components/Navbar";
import {Row,Col,Container} from 'react-bootstrap'
import { Carousel } from "antd";
import { Card } from "react-bootstrap";
import slide_image_1 from '../images/ApplePieSmall.webp'
import slide_image_2 from '../images/BreadPudding.jpg'
import slide_image_3 from '../images/Cinammon-Bun.jpg'
import slide_image_4 from '../images/ChocolateChipCookies.jpg'
import slide_image_5 from '../images/Croissant.jpg'
import slide_image_6 from '../images/Danishes.jpg'
import GalaxTea from '../images/ButterflyPeaFlowerTea.jpg'
import MoonCakes from '../images/MoonCakes.jpg'
import logo from '../images/logo.png'
import Footer from "../components/Footer";

 const Home = () => {
  return (
    <div className="background">
    <section className="wrapper">
      <Navbar/>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
      <span className='mobileClassic'> ⊹˚₊⊹˚ʚ Welcome to Dreamy Cafe! ⊹˚₊⊹˚ʚ</span>
      <span> The Best Cafe To Relax In!</span>
      </div>
      <Container className="containerOne">
        <Row>
          <Col>
          <h1 className="glow"> ⭐ Dreamy Cafe Exclusives ⭐ </h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={6}>
          <div>
            <Card className="cardDesign">
              <Card.Img className="cardImage" src={GalaxTea}/>
              <Card.ImgOverlay>
                <Card.Text>
                  <h2 className="cardCaptionExclusive"> GalaxTea </h2>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <div>
              <Card className="cardDesign">
                <Card.Img className="cardImage" src={MoonCakes}/>
                <Card.ImgOverlay>
                  <Card.Text>
                    <h2 className="cardCaptionExclusive"> Moon Cakes </h2>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
          <h1 className="glow"> ⭐ Popular Items on our Menu: ⭐</h1>
          </Col>
        </Row>

        <Row>
          <Col>
        <div>
        <Card className="cardDesign">
      <Card.Img className="cardImage" src= {slide_image_1} />
      <Card.ImgOverlay>
        <Card.Text>
          <h2 className="cardCaption"> Apple Pie </h2>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
        </div>
        </Col>


        <Col>
        <div>
        <Card className="cardDesign">
      <Card.Img className="cardImage" src= {slide_image_2} />
      <Card.ImgOverlay>
        <Card.Text>
          <h2 className="cardCaption"> Bread Pudding </h2>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
        </div>
        </Col>


        <Col>
        <div>
        <Card className="cardDesign">
      <Card.Img className="cardImage" src= {slide_image_3} />
      <Card.ImgOverlay>
        <Card.Text>
          <h2 className="cardCaption"> Cinammon Buns </h2>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
        </div>
        </Col>
        </Row>
        <Row>
          <Col>
          <div>
            <Card className="cardDesign2ndRow">
              <Card.Img className='cardImage' src= {slide_image_4} />
              <Card.ImgOverlay>
                <Card.Text>
                  <h2 className="cardCaption2ndRow"> Chocolate Chip Cookies</h2>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          </Col>
          
          <Col>
          <div>
            <Card className="cardDesign2ndRow">
              <Card.Img className="cardImage" src={slide_image_5}/>
              <Card.ImgOverlay>
                <Card.Text>
                  <h2 className="cardCaption2ndRow"> Croissant </h2>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            </div>
            </Col>

            <Col>
            <div>
              <Card className="cardDesign2ndRow">
                <Card.Img className="cardImage" src={slide_image_6}/>
                <Card.ImgOverlay>
                  <Card.Text>
                    <h2 className="cardCaption2ndRow"> Danishes </h2>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            </Col>
        </Row>
      </Container>
      <Container>
          <Row>
          <Col>
          <h2 className="SectionName">  ☄️ Learn More About Us!☄️ </h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={8} className = "colRightHalf">
          <p className="description"> Welcome to our café, where we invite you to embark on a journey of dreams, space, and books. Our space is inspired by the endless possibilities of the universe and the power of imagination. With an atmosphere that encourages creativity and relaxation, we invite you to indulge in our carefully crafted menu of coffee, tea, and light bites while exploring our collection of books and literary works. Whether you're looking to escape into a world of fiction or spark your curiosity with non-fiction, we have something for everyone. Come dream with us, as we fuel your imagination one cup at a time. 🍵. Curious? Go to About Us!</p>
          </Col>
          <Col sm={12} md={12} lg={4}> 
          <img className="aboutUsLogo" src={logo}/>
          </Col>
        </Row> 
      </Container>
      <Footer/>
     
    </section>
    </div>
  )
}
export default Home;