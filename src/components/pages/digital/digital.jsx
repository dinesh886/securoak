import React, { useEffect } from "react";
import "./digital.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaArrowRightLong } from "react-icons/fa6";

export default function Digital() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="session_digital">
      <Container fluid>
        <Row>
          <Col md={6} className="digital" data-aos="zoom-in">
            <div className="flex_box">
              <div className="box">
                {/* <div className="title">Devop / Secops Operations</div> */}
                <div className="cnt">
                Privileged Access Management (PAM)
                </div>
                <div className="desc">
                Securoak’s Privileged Access Management (PAM) solutions enhance security by controlling access to critical IT systems. Our tailored strategies streamline credential management, provide real-time threat detection, ensure compliance, and seamlessly integrate with existing infrastructure. Partnering with us empowers your organization to protect sensitive data while optimizing privileged access.
                </div>
{/* <ul class="custom-list">
  <li>Continuous integration and delivery (CI/CD)</li>
  <li>Security integrated into development workflows</li>
  <li>Enhanced collaboration between development and operations teams</li>
</ul> */}

               
                <Link
  to="/devop-secops" // Updated to use Link
  aria-label="Learn more about our DevOps/SecOps services"
  className="ser-learn3 btn-primary3"
  onClick={(e) => {
    setTimeout(() => {
      const element = document.getElementById("devop"); // Make sure the ID matches
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  }}
>
  Know more
  <span className="arrow_right">
    <FaArrowRightLong />
  </span>
</Link>
             
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
