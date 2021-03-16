import React, { Fragment, useState } from "react";
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

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    content: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (key, val) => {
    setContactData({ ...contactData, [key]: val });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    if (contactData.name == "" || contactData.email == "") {
      setMessage("Fill in required fields");
      return;
    }
    fetch("/contact_form/entries", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(contactData),
    }).then((response) => {
      if (response) {
        if (response.status === 201) {
          setMessage("Thank you for your message. I will be in touch shortly.");
        } else {
          setMessage("Your message was unsuccessful. Please resubmit.");
        }
      }
    });
  };
  return (
    <>
      <Container className="hero">
        <Row>
          <Col className="welcome-section">
            <h1>Contact Nicole at Bullseye Branding Inc.</h1>
            <h2>Design. Develop. Market.</h2>
            <p className="hero-p">
              We assist businesses who struggle with time and/or technical
              skill, to develop their professional brand. We offer
              professionally branded designs, website development, and social
              media marketing, to enhance brand awareness effectively, online
              and off.
            </p>
          </Col>
          <Col>
            <img src={homeHero} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          
          <h1>Contact Nicole For More Information.</h1>
          </Col>
        </Row>
    
        <form className="form">
          <Row>
            <Col>
              <label htmlFor="name">Name:</label>
              <input
                value={contactData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                type="text"
                id="name"
                name="name"
                required
              />
            </Col>
            <Col>
              <label htmlFor="email">Email:</label>
              <input
                value={contactData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                type="email"
                id="email"
                required
              />
            </Col>
            <Col>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                value={contactData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                type="phoneNumber"
                id="phoneNumber"
                placeholder="xxx-xxx-xxxx"
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <label htmlFor="content">Content</label>
              <textarea
                type="text"
                value={contactData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                rows="3"
                cols="30"
                name="content"
                id="content"
                required
              ></textarea>
            </Col>
          </Row>

          <Row>
            <Col>
              <input
                type="submit"
                onClick={onSubmit}
                value="Submit"
                className="button-contact"
              />
              <p>{message}</p>
            </Col>
          </Row>
        </form>
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
};

export default Contact;
