import React from "react";
import "./design.scss";
import { Link } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaArrowRightLong } from "react-icons/fa6";
// Removed BsCheck import, as we are using bullets instead

import one from "../../assests/ui/identitygovernance.jpg";
import two from "../../assests/ui/governence3.jpg";
import four from "../../assests/ui/four.jpg";

import pot from "../../assests/ui/gov.jpg";

export default function Design() {
  return (
    <section className="design_full " aria-labelledby="design-heading">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="design_ux">
              <div className="desc">
              Identity Governance (IG)
              </div>
              <div className="sub_desc">
              Securoak’s Identity Governance solutions enhance security and compliance by providing visibility over access permissions and risks. With automated policy enforcement, expert partnerships, and seamless system integration, our approach streamlines identity management, mitigates risks, and empowers organizations to protect sensitive data while ensuring operational efficiency and regulatory compliance.
              </div>

              {/* Using bullet points instead of tick icons */}
              {/* <div className="key_points">
                <ul className="bullet-list">
                  <li>User-centered design for optimal experience</li>
                  <li>Responsive interfaces for all devices</li>
                  <li>Increased user engagement and retention</li>
                </ul>
              </div> */}

              <Link
                to="/ui-ux-design"
                aria-label="Learn more about our UI/UX design services"
                className="ser-learn4 btn-primary4"
                onClick={(e) => {
                  setTimeout(() => {
                    const element = document.getElementById("uiux");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 0);
                }}
              >
                Know more
                <span className="arrow_right">
                  <FaArrowRightLong aria-hidden="true" />
                </span>
              </Link>
            </div>
          </Col>

          <Col md={3}>
            <div className="two_image">
              <div className="image_one">
                <img src={one} alt="Screenshot of design 1" />
              </div>
              <div className="image_one">
                <img src={two} alt="Screenshot of design 2" />
              </div>
            </div>
          </Col>

          <Col md={3}>
            <div className="potrait_img">
              <img src={pot} alt="Portrait of a design" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
