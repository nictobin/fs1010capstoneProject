//external imports
import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//internal imports
import portfolioHeader from "../images/portfolio-header.png";
import websiteDesign1 from "../images/website-design-1.jpg";
import websiteDesign2 from "../images/website-design-2.jpg";
import websiteDesign3 from "../images/website-design-3.jpg";
import logoDesign1 from "../images/logo-design-1.jpg";
import logoDesign2 from "../images/logo-design-2.jpg";
import logoDesign3 from "../images/logo-design-3.jpg";
import logoDesign4 from "../images/logo-design-4.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <>
      <Container className="about-hero">
          <Row>
            <Col className="welcome-section">
              <h1>Bullseye Branding Inc.</h1>
              <h2>Nicole's Portfolio</h2>
              <p className="hero-p">
                Design is how we visually communicate with others.
                In order to build a strong portfolio, the first step is client communication. Through this process, you can then begin to evaluate color schemes, images, fonts, and other various design elements that will brand their business in the most effective and visually pleasing way in order to grab the attention of the intended audience.
              </p>
              <Button href="/contact">CONTACT</Button>
            </Col>
            <Col>
              <img src={portfolioHeader} />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <h2>Website Design</h2>
              <p>
                Covid-19 has brought with it a sharp trend in businesses moving
                to an online market. We aim to help businesses get online
                without the steep technological learning curve! We make this
                process as simple and seamless as possible for our clients.
                Allowing clients to stay in the mind of their target market
                while leaving all the website development work to us. We keep
                our clients looking professional throughout all of their visual
                branding outlets.
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <img src={websiteDesign1} alt="website design" />
        </Container>
        <Container>
          <img src={websiteDesign2} alt="website design" />
        </Container>
        <Container>
          <img src={websiteDesign3} alt="website design" />
        </Container>

        <Container>
          <Row>
            <Col>
              <h2>Graphic Design Logo Examples</h2>
              <p>
                Below is a collection of recent logo designs, used for both social and print media
                design concepts.
                We can make a client's visual branding design flow accross all digital advertising, print advertising and website design. Want a well rounded branding package that includes a bit of everything? Just  contact us to find out more!
              </p>
              <Button href="/contact">CONTACT</Button>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <img src={logoDesign1} alt="website design1" />
            </Col>
            <Col>
              <img src={logoDesign2} alt="website design2" />
            </Col>
            <Col>
              <img src={logoDesign3} alt="website design3" />
            </Col>
            <Col>
              <img src={logoDesign4} alt="website design4" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Portfolio;
