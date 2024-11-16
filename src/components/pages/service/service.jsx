import React from "react";
import "./service.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



import Data from "./data";

import { FaArrowRightLong } from "react-icons/fa6";

export default function Service() {
  return (
    <section className="sec_pad" aria-labelledby="service-heading">
      <Container>
        <Row  className="row-gap-small">
          <Col md={12}>
            <div className="service_full">
              <div className="title" id="service-heading">
                {/* Integrated Technology Services */}
              </div>
              <div className="sub_title">
               What we Offer  
              </div>
              <div className="cnt">
             <p> Securoak leads the way in digital security and IT innovation, offering tailored solutions that enhance performance, fortify resilience, and drive measurable outcomes. We empower businesses to thrive in an ever-evolving digital landscape with a strong emphasis on cybersecurity and AI.</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="row-gap-small2">
          {Data.map((value, index) => (
            <Col md={6} key={index}>
              <div className="service_section_box">
                <div
                  className="service_section_box_inner"
                  style={{
                    "--image-url": `url(${value.Image})`,
                    "--image-two-url": `url(${value.ImageTwo})`,
                  }}
                >
                  <div className="service_section_box_front">
                    <div className="title_only">
                      <div className="title">{value.Title}</div>
                    </div>
                  </div>
                  <div className="service_section_box_back">
                    <div className="text_color_white">
                      <div className="cnt">{value.Desc}</div>
                      <button className="know_more">
                        <a
                          href={value.Link}
                          aria-label={`Learn more about ${value.Title}`}
                        >
                          Know More
                          <span className="arrow_right">
                            <FaArrowRightLong aria-hidden="true" />
                          </span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
