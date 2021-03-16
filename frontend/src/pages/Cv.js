//external imports
import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//internal imports
import cvHero from "../images/cv-hero.png";
import designImage from "../images/design-image.png";
import mission from "../images/mission-image.png";


class Cv extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col className="welcome-section">
              <h1>Nicole's CV Page</h1>
              <h2>Experience. Creativity. Reliability.</h2>
              <p className="hero-p">
                Building brands, but most importantly, building relationships.
                We want you to feel confident in our character as well as our
                design.
              </p>
              <Button href="/contact">CONTACT</Button>
            </Col>
            <Col>
              <img src={cvHero} />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <img src={designImage} alt="design image" />
            </Col>
            <Col>
              <h1>Brief History</h1>
              <p>
                Thank you for taking the time to review my resume. I am
                currently a creative entrepreneur that specializes in branding,
                design, and website development.
              </p>
              <p>
                Since graduating as a Graphic Designer in 2000, my education has
                been continuous, adding many digital skills, in order to adapt
                to the ever changing industry. I have been fortunate enough to
                gain knowledge and experience within many areas of the design
                and print industry; from large 4 colour press based operations,
                to smaller print advertising firms. Some areas of discipline
                include print advertising, corporate apparel, merchandise,
                signage, website development, branding and design.
              </p>
              <p>
                Throughout my career, I’ve seen this industry as an employee, a
                manager, and a business owner. All of which have given me a well
                rounded look at the industries many methods and offerings. As
                well as an unwavering appreciation for the people who carry out
                each role, and the clients that make this industry so great to
                be a part of.
              </p>
              <p>
                I also love helping small businesses succeed and am very
                involved within the economic growth sector of this Province. As
                part of my role, I provide presentations on Branding and Design
                to organizations across the Province that help facilitate in
                business development and growth. I am also Chair of the CBDC
                Board of Directors, a business mentor for Futurpreneur Canada, a
                member of NLOWE, and of Women in Tech. I believe that success
                comes from sharing and that we are all connected within our
                communities, towns and economy.
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <h2>Agency Owner | 2017 - Present</h2>
              <p>
                Bullseye Branding is a creative design agency that caters to the
                visual branding needs of their corporate clients.
                <br />
                Through strategic use of colours, fonts, images and design
                composition, our agency crafts a unique visual brand focussed on
                our clients overall professional image, and their intended
                market. Offerings include website development, hosting,
                corporate identity, digital marketing materials and advertising
                design.
              </p>
              <h2>Daily Tasks and Responsibilities:</h2>
              <ul>
                <li className="li">
                  Establish, grow and retain strong relationships with clients
                  and vendors.
                </li>
                <li className="li">
                  Help evaluate, develop and execute marketing and communication
                  strategies for the agency.
                </li>
                <li className="li">
                  Develop and produce promotional materials and digital content
                  for business growth.
                </li>
                <li className="li">
                  Consult with clients to grasp a clear picture of their
                  business and intended market in order to quote on potential
                  design requirements, and production costs.
                </li>
                <li className="li">
                  Oversee design work and assist with service development
                  required for each client.
                </li>
                <li className="li">
                  Purchase materials and office supplies for production required
                  or inventory stocked.
                </li>
                <li className="li">
                  Budget and plan financial activities required to run business
                  operations.
                </li>
                <li className="li">Manage staff and delegate work loads.</li>
                <li className="li">
                  Review and report HST quarterlies for any sales or ITC’s the
                  business produces throughout the fiscal year.
                </li>
              </ul>
            </Col>
            <Col>
              <img src={mission} alt="mission" />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col className="two-col-titles">
              <h2 className="two-col-titles-h2">Key Strengths</h2>
            </Col>
            <Col className="two-col-titles">
              <h2 className="two-col-titles-h2">Software Skills</h2>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <p>
                Branding Insight
                <br />
                Staff Management
                <br />
                Business Management Experience
                <br />
                Established Customer Relationships
                <br />
                Established Vendor Relationships
                <br />
              </p>
            </Col>
            <Col>
              <p>
                Community Involvement
                <br />
                Financial Management Skills
                <br />
                Strong Communication Skills
                <br />
                Strong Design Skills
                <br />
                Extensive Industry experience
                <br />
              </p>
            </Col>
            <Col>
              <p>
                Adobe Creative Suite
                <br />
                Corel Draw
                <br />
                ProCreate
                <br />
                WordPress
                <br />
                Trello
                <br />
            </p>
            </Col>
            <Col>
              <p>
                Buffer Social
                <br />
                Canva Design
                <br />
                MS Office Suite
                <br />
                Google Suite
                <br />
                QuickBooks and SAGE
                <br />
            </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Cv;
