//external imports
import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

//internal imports
import aboutHero from "../images/about-us-hero.png";
import designBulb from "../images/design-bulb.jpg";
import iconOne from "../images/monitor.png";
import social from "../images/marketing.png";
import logoDesign from "../images/project.png";
import seo from "../images/technical-support.png";
import profileImage from "../images/staff2-profile-pic.jpg";

class About extends React.Component {
  render() {
    return (
      <>
        <Container className="about-hero">
          <Row>
            <Col className="welcome-section">
              <h1>About Bullseye Branding Inc.</h1>
              <h2>Experience. Creativity. Reliability.</h2>
              <p className="hero-p">
                Building brands, but most importantly, building relationships.
                We want you to feel confident in our character as well as our
                design.
              </p>
              <Button href="/contact">CONTACT</Button>
            </Col>
            <Col>
              <img src={aboutHero} />
            </Col>
          </Row>
        </Container>
        <Container className="about-cta-section">
          <Row>
            <Col className="transbox">
              <h2>About Bullseye Branding Inc.</h2>
              <p>
                Bullseye Branding Inc. is a professional design agency that
                works virtually with our team members as well as our clients.
                Our strengths lie in the ability to provide our clients 3 key
                areas that go hand in hand with promoting a business. The first
                area is visual branding design such as logo design concepts and
                overall marketing design. Our second area lies in assisting
                small to medium sized businesses move to an online platform
                through website development and hosting. Our third area is
                social media marketing. This third piece of our business model
                helps create online awareness in order to build followers and
                increase visitor traffic for our clients and their sites. Our
                overall goal is to create the ultimate “WOW” factor for our
                clients with memorable branding design, functional website
                development, and an influential Social Media Marketing strategy.{" "}
              </p>
            </Col>
            <Col>
              <img src={designBulb} alt="design bulb" className="design-bulb" />
            </Col>
          </Row>
        </Container>
        <Container className="cta-section">
          <Row>
            <Col>
              <h2>Website Development</h2>
              <p>
                Website design and development is the backbone of any online
                presence. We offer a free consultation via zoom that offers you
                the opportunity to discuss your goals and vision when it comes
                to online marketing. Please feel free to check out our website
                design services or contact us for more information.
              </p>
              <Button href="/contact">CONTACT</Button>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <img src={profileImage} />
            </Col>
            <Col className="why-choose-text">
              <h2>About The Owner</h2>
              <p>
                With over 20 years’ experience, Nicole has been fortunate enough
                to have touched on just about every aspect of this industry from
                web-fed press production, to print advertising, branding,
                corporate identity, web development and signage. Nicole has
                experienced this industry as an employee, a manager, and a
                business owner. All of which have given her a well rounded look
                at the industries many methods and offerings. As well as an
                unwavering appreciation for the people who carry out each role,
                and the clients that make this industry so great to be a part
                of. Nicole is also a public speaker, providing presentations on
                how to target your market through effective visual Branding and
                design. With a passion for business, and a flare for design,
                Nicole strives to help other business owners succeed in reaching
                their goals.
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <img src={iconOne} alt="monitor" />
              <h3>WEBSITE DESIGN</h3>
              <p>
                Handcrafted responsive website design, modern features, social
                networking and DIY content management CMS.
              </p>
            </Col>
            <Col>
              <img src={social} alt="monitor" />
              <h3>SOCIAL MEDIA MARKETING</h3>
              <p>
                Professional, creative content and designs for your social
                accounts.
              </p>
            </Col>
            <Col>
              <img src={logoDesign} alt="monitor" />
              <h3>LOGO DESIGN</h3>
              <p>
                Custom logos created to be memorable, multi-functional and to
                clearly represent your core vision and brand.
              </p>
            </Col>
            <Col>
              <img src={seo} alt="monitor" />
              <h3>ON-PAGE S.E.O.</h3>
              <p>
                Search engine optimization helps your target market find you
                through relevent online search results.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default About;
