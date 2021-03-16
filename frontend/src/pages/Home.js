//external imports
import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//internal imports
import homeHero from "../images/Asset 1.png";
import iconOne from "../images/monitor.png";
import social from "../images/marketing.png";
import logoDesign from "../images/project.png";
import seo from "../images/technical-support.png";
import profileImage from "../images/staff2-profile-pic.jpg";
import digitalAdvertising from "../images/digital-advertising.png";

class Home extends React.Component {
  render() {
    return (
      <>
        <Container className="hero">
          <Row>
            <Col className="welcome-section">
              <h1>Welcome to Bullseye Branding Inc.</h1>
              <h2>Design. Develop. Market.</h2>
              <p className="hero-p">
                We assist businesses who struggle with time and/or technical
                skill, to develop their professional brand. We offer
                professionally branded designs, website development, and social
                media marketing, to enhance brand awareness effectively, online
                and off.
                <br />
                We offer creative website development and hosting that is sure
                to meet your needs… AND your target audience’s! If there’s a web
                design project you’d like to discuss, or a question you have,
                just click the button below.
              </p>
              <Button href="/contact">CONTACT</Button>
            </Col>
            <Col>
              <img src={homeHero} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h2>BULLSEYE BRANDING INC. SERVICES</h2>
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
                development, and an influential Social Media Marketing strategy.
                Feel free to check us out on LinkedIn. You can also follow us on
                Facebook or Instagram. Have a design related question? Contact
                us here.
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
        <Container>
          <Row>
            <Col>
              <img src={profileImage} />
            </Col>
            <Col className="why-choose-text">
              <h2>WHY CHOOSE BULLSEYE BRANDING INC?</h2>
              <p>
                Hi, my name is Nicole. As a business owner, I can relate
                first-hand with how overwhelming it can be to try and balance
                time and priorities while building a business. I also know how
                time consuming marketing a business can be. When starting
                Bullseye Branding Inc., one of my main goals was to build
                strong, trusting relationships with our small business clients
                who are feeling lost and overwhelmed with the marketing process.
                And in turn, give them back their time to focus on other
                priorities. We want to remove the intimidation factor from this
                process, so that each client is ensured they have long term
                success with moving online in a professional manner. At Bullseye
                Branding Inc. we offer beautifully branded business visuals,
                website development, and social media marketing for small to
                medium sized businesses.
              </p>
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
            <Col className="digital-advertising">
              <h2>DIGITAL ADVERTISING</h2>
              <p>
                Not sure what to post on social media? We can help with imagery,
                post design, and sizing for each platform. We can design branded
                social media images, cover photos, and many other shapes and
                forms of digital advertising. Need a social media content
                calendar? Let’s talk design!
              </p>
            </Col>
            <Col>
              <img src={digitalAdvertising} Alt="digital-advertising" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
