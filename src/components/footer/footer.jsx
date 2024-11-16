import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../assests/footer-logo.png";
import cta_img from "../assests/cta.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { AiFillForward } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function Footer() {
  const Offer = [
    {
      Title: "Home",
      Link: "/securoak10/identity-access-management",
    },
    { Title: "Our Services", Link: "" },
    { Title: "Events", Link: "" },
    { Title: "Contact Us", Link: "" },
    // { Title: "API Development", Link: "/securoak10/api-developement" },
    // { Title: "Demo", Link: "#" },
  ];

  return (
    <section className="footer_full" aria-labelledby="footer-heading">
        
      <div
        className="cta overlay-primary py-50 text-center text-lg-start"
        style={{
          backgroundImage: `url(${cta_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-lg-6"
              style={{
                zIndex: 9999,
              }}
            >
              <div className="text-white contact-inner">
                <h2>Subscribe to our newsletter </h2>
              <p>Subscribe for Securoak Updates </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end align-self-center">
              <Link
                to="/ContactUs"
                className="btn btn-light subscribe"
                onClick={(e) => {
                  setTimeout(() => {
                    const element = document.getElementById("contact"); // Make sure the ID matches
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 0);
                }}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <Container>
          <Row>
            <Col md={3}>
              <div className="footer_image">
                <div className="sizing">
                  <img
                    src={logo}
                    alt="Securoak Logo"
                    title="Securoak Logo"
                    loading="lazy"
                  />
                </div>
                <div className="cnt">
                  At Securoak, we are committed to delivering innovative
                  technology solutions that empower businesses to thrive in
                  today’s fast-paced digital landscape.
                </div>

                <div className="social_link">
                  <a href="https://facebook.com" aria-label="Facebook">
                    <div className="facebook">
                      <FaFacebookSquare />
                    </div>
                  </a>
                  <a href="https://linkedin.com" aria-label="LinkedIn">
                    <div className="linkedin">
                      <FaLinkedin />
                    </div>
                  </a>
                  <a href="https://instagram.com" aria-label="Instagram">
                    <div className="insta">
                      <FaInstagramSquare />
                    </div>
                  </a>
                  <a href="https://youtube.com" aria-label="YouTube">
                    <div className="youtube">
                      <IoLogoYoutube />
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="company_links">
                <div className="title" id="footer-heading">
                  Quick Links
                </div>
                {Offer.map((item, nav) => (
                  <div className="specified_link" key={nav}>
                    <a href={item.Link} aria-label={item.Title}>
                      <AiFillForward />
                      {item.Title}
                    </a>
                  </div>
                ))}
              </div>
            </Col>
            <Col md={4}>
              <div className="contact_info">
                <div className="title">Contact Info</div>
                <div className="address">
                  <span className="add-bold">
                    <span>
                      <FaLocationDot />
                    </span>
                    <span className="text">
                      Level 49, 8 Parramatta Square, 10 Darcy Street,
                      Parramatta, NSW 2150, Australia
                    </span>
                  </span>
                </div>
                <div className="contact_one">
                  <a
                    href="tel:+61288971340"
                    className="phone_number"
                    aria-label="Call us at +61 28897 1340"
                  >
                    <span className="num_bold">
                      <span>
                        <IoLogoWhatsapp />
                      </span>
                      <span className="text"> +61 28897 1340</span>
                    </span>
                  </a>
                </div>

                <div className="contact_two">
                  <a
                    href="mailto:contact@securoak.com"
                    className="mail_id"
                    aria-label="Email us at contact@securoak.com"
                  >
                    <span className="email_bold">
                      <span>
                        <MdOutgoingMail />
                      </span>
                      <span className="text"> contact@securoak.com</span>
                    </span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className="divider_line"></div>
          <Row className="align-items-center">
            <Col md={4} className="split_divider">
              <div className="total_routes">
                <div className="routes_pages">
                  <div className="policy_link">
                    <Link to="/PrivacyPolicy"  onClick={(e) => {
                        setTimeout(() => {
                          const element = document.getElementById("privacy"); // Make sure the ID matches
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 0);
                      }}>
                      <span className="Policy">Privacy Policy</span>
                    </Link>
                  </div>
                  <span className="line">|</span>
                  <div className="policy_link">
                    <Link
                      to="/Discaimer"
                      onClick={(e) => {
                        setTimeout(() => {
                          const element = document.getElementById("disclaimer"); // Make sure the ID matches
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 0);
                      }}
                    >
                      <span className="Disclaimer">Disclaimer</span>
                    </Link>
                  </div>
                  <span className="line">|</span>
                  <div className="policy_link">
                    <Link to="/TermnsandConditions"  onClick={(e) => {
                        setTimeout(() => {
                          const element = document.getElementById("terms"); // Make sure the ID matches
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 0);
                      }} >
                      <span className="Terms">Terms & Conditions</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="rights">
                Copyright © 2024 Securoak. All Rights Reserved.
              </div>
            </Col>
            <Col md={4}>
              <div className="designed">
                <a
                  href="https://jayamwebsolutions.com/"
                  aria-label="Visit Jayam Web Solutions"
                >
                  Developed by Jayam Web Solutions
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
     
    </section>

);
}
