import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends React.Component {
  render() {
    return (
      <>
      <Container className="footer">
        <Row className="footer-section">
          <Col>
            <p>
              ADDRESS
              <br />
              67 Island Cove Rd. <br />
              Bay Bulls, NL
              <br /> A0A 1C0
            </p>
          </Col>
          <Col>
            <p>
              CONTACT
              <br />
              Email: info@bullseyebranding.ca <br />
              Phone: 709-238-2583
              <br /> Web: www.bullseyebranding.ca
            </p>
          </Col>
          <Col>
            <p>
              HOURS
              <br />
              Mon-Fri: 9am to 4:30pm <br />
              Sat-Sun: Closed
              <br /> Evenings: On Call
            </p>
          </Col>
        </Row>
        <Row className="footer-section">
          <Col className="copyright">
            <p>
              Copyright. All rights reserved: Nicole Bruce |
              <Link to="admin-login"> ADMIN LOGIN</Link>
            </p>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Footer;
