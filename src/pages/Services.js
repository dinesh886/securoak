import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.scss";
import "./about.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import service from "../components/assests/service.jpg";
import 'typicons.font/src/font/typicons.css';

function Services() {
  return (
    <div className="about-page">
      <Header aboutPage={true} />
      <div className="about-image-container">
        <img 
          src="https://www.jayamdesigners.co.in/cms-static/images/background/page-title.jpg"
          alt="Our Services page title background"
          className="about-page-image"
        />
        <div className="overlay-text">
          <h1>Our Services</h1>
          <p>Home / Our Services</p>
        </div>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="about_image">
              <img
                src={service}
                alt="Overview of our services"
                title="About Our Company"
                loading="lazy"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="abt_desc">
              <div className="title" id="about-heading">
                Our Services
              </div>
              <div className="desc">
                We're excited to introduce <br /> you to our establishment
                <br /> Company
              </div>
              <div className="passage">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="passage">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="passage">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          </Col>
        </Row>
      </Container>
      <Container>
        <section className="section">
          <div className="container">
            <div className="row">
              {/* service item */}
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="card text-center">
                  <h4 className="card-title pt-3">Business Consulting</h4>
                  <div className="card-img-wrapper">
                    <img className="card-img-top rounded-0" src="https://www.jayamdesigners.co.in/cms-static/images/service/service-1.jpg" alt="Business Consulting service" />
                  </div>
                  <div className="card-body p-0">
                    <i className="typcn typcn-home-outline square-icon translateY-33 rounded rounded"></i>
                    <p className="card-text mx-2 mb-0">Lorem ipsum dolor amet consecte tur adipisicing elit sed done eius mod tempor enim ad minim veniam quis nostrud.</p>
                    <a href="service-single.html" className="btn btn-secondary translateY-25">Read More</a>
                  </div>
                </div>
              </div>
              {/* More service items */}
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default Services;
