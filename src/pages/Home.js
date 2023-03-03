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
import logo from '../images/logo.png'

 const Home = () => {
  return (
    <div className="background">
    <section className="wrapper">
      <Navbar/>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
      <span> ⊹˚₊⊹˚ʚ Welcome to Dreamy Cafe! ⊹˚₊⊹˚ʚ</span>
      <span> The Best Cafe To Relax In!</span>
      </div>
      <Container className="containerOne">
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
		<Container>
			<Row>
				<Col sm={12} md={12} lg={6}>
		<div className='topfooter'>
			<div className='topfooter__list'>
				<h3 className='listitems__heading'>About Dreamy Cafe</h3>
				<ul className='listitems'>
					<li>Our Company</li>
					<li>Our Products</li>
					<li>Our Stories and News</li>
					<li>Customer Service</li>
				</ul>	
			</div>
			</div>
			</Col>
			
		
				<Col sm={12} md={12} lg={6}>
			<div className='topfooter__list'>
				<h3 className='listitems__heading'>Careers</h3>
				<ul className='listitems'>
					<li>Culture and Values</li>
					<li>Diversity and Inclusion</li>
					<li>Work at Dreamy Cafe</li>
					<li>Corporate Careers</li>
					<li>Retail Careers</li>
				</ul>
			</div>
			</Col>
					</Row>
				<Row>
					<Col sm={12} md={12} lg={6}>
			<div className='topfooter__list'>
				<h3 className='listitems__heading'>Social Impact</h3>
				<ul className='listitems'>
					<li>Overview</li>
					<li>People</li>
					<li>Planet</li>
					<li>Environmental and Social Impact Reporting</li>
				</ul>
			</div>
			</Col>
					<Col sm={12} md={12} lg={6}>
			<div className='topfooter__list'>
				<h3 className='listitems__heading'>For Business Partners</h3>
				<ul className='listitems'>
					<li>Corporate Gift Card Sales</li>
					<li>Branded Solutions</li>
				</ul>
			</div>
			</Col>
			</Row>
		
				<Row>
					<Col sm={12} md={12} lg={12}>
			<div className='topfooter__list'>
				<h3 className='listitems__heading'>Order and Pickup</h3>
				<ul className='listitems'>
					<li>Order on the App</li>
					<li>Order on the Web</li>
					<li>Delivery</li>
					<li>Order and Pickup Options</li>
				</ul>
			</div>
			</Col>
			</Row>
			</Container>
    </section>
    </div>
  )
}
export default Home;