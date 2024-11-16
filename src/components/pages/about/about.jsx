import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import abt_img from "../../assests/about.jpg";

import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
  return (
    <section aria-labelledby="about-heading">
      <div className="about_section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="about_image">
                <img
                  src={abt_img}
                  alt="About Us"
                  title="About Our Company"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="abt_desc">
                <div className="title" id="about-heading">
                  About Us
                </div>
                <div className="desc">
                Who we are ? 
                </div>

                <div className="passage">
                Securoak is a leader in digital security and IT innovation,
                 tackling complex cybersecurity and infrastructure challenges 
                 for businesses. Our mission is to deliver advanced solutions 
                 that enhance performance and protect organizations, resulting 
                 in improved resilience and operational efficiency. With expertise
                  in Identity and Access Management (IAM), application integration, 
                  and IT outsourcing, we offer tailored services, including API development
                   and managed IT solutions that drive measurable outcomes.
                </div>
                <div className="passage">
                  With a focus on efficiency and scalability, we create create
                  tailor-made solutions that drive success in an ever-evolving
                  tech landscape. Our team of experts ensures seamless
                  integration and reliable support, enabling businesses to
                  thrive in today’s competitive environment.
                </div>

                <div className="passage">
                  Expertise in Innovative Technology Solutions.
                </div>
              </div>

              <div className="two_blocks">
                <div className="grt">
                  <div className="title">15 Years Experience</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                <div className="exp">
                  <div className="title">99% Guarantee</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>

              <Link
  to="/about" // Use just the path to the About page
  aria-label="Learn more about our services"
  className="ser-learn2 btn-primary2 mt-4"
  onClick={(e) => {
    setTimeout(() => {
      const element = document.getElementById("services"); // Make sure the ID matches
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
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
