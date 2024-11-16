import React from "react";
import "./cloud.scss";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsCheck } from "react-icons/bs";

import { FaArrowRightLong } from "react-icons/fa6";

import cloude from "../../assests/cloud/cloud.jpg";

export default function Cloud() {
  return (
    <section className="cloud_full">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="cloud_cnt">
              {/* <h2 className="title">Cloud Solutions</h2> */}
              <p className="desc">
                Application Integration Services
              </p>

              <p className="sub_desc">
              Securoak’s Application Integration Services enhance connectivity across your technology ecosystem, combining intuitive UI/UX development with seamless application integration. Our offerings include secure API development, DevOps integration, and comprehensive service management, ensuring your applications operate efficiently and deliver exceptional user experiences while aligning with your business objectives.
              </p>

              {/* <div className="total_list">
                <div className="list">
                  <div className="para">
                    <span className="tick">
                    <i class="fa-solid fa-circle"></i>
                    </span>
                    <span className="titles">
                      Secure data storage and backup
                    </span>
                  </div>
                  <div className="para">
                    <span className="tick">
                    <i class="fa-solid fa-circle"></i>
                    </span>
                    <span className="titles">
                      Scalable infrastructure for future growth
                    </span>
                  </div>
                </div>
                <div className="list">
                  <div className="para">
                    <span className="tick">
                    <i class="fa-solid fa-circle"></i>
                    </span>
                    <span className="titles">
                      24/7 access from any location
                    </span>
                  </div>
                  <div className="para">
                    <span className="tick">
                    <i class="fa-solid fa-circle"></i>
                    </span>
                    <span className="titles">
                      Disaster recovery solutions for business continuity
                    </span>
                  </div>
                </div>
              </div> */}

              <button className="learn">
                <Link
                  to="/CloudSolutions" // Updated to use Link
                  aria-label="Learn more about our cloud solutions"
                  onClick={(e) => {
                    setTimeout(() => {
                      const element = document.getElementById("cloud"); // Make sure the ID matches
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
              </button>
            </div>
          </Col>
          <Col md={6}>
            <div className="image">
              <img src={cloude} alt="Cloud solutions overview" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
