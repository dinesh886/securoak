import React from "react";
import "./identity.scss";
import "./identity.css";
import { Link } from "react-router-dom";

import { FaShieldAlt, FaRegLightbulb, FaTachometerAlt, FaLayerGroup, FaPlug, FaChartLine } from 'react-icons/fa';
import banner from '../components/assests/identityimg4.jpg';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import abt_img from "../components/assests/intel.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Identity = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="identity-page" id="identify">
      <Header identityPage={true} />

      {/* Image and Overlay Section */}
      <div className="identity-image-container">
        <img
          src={banner}
          alt="A depiction of the company's philosophy"
          className="identity-page-image"
        />
        <div className="overlay-text">
          <h1>Identity Access Management</h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Identity Access Management</p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="content-section">
      <Container fluid>
        <div className="content-container">
        <div className="section-header sec-start">
                {/* <h3 className="toggle-line">Transforming Customer Identity Management with Securoak</h3> */}
              </div>

              <p className="section-description">
                At Securoak, we provide cutting-edge Customer Identity and Access Management (CIAM) solutions that empower your customers to securely manage their personal information. Our services are meticulously designed to meet international regulatory standards, fostering trust and ensuring consistent experiences across web, mobile, and social media platforms. With Securoak’s CIAM solutions, you not only enhance customer satisfaction but also create a secure environment for all users, integrating advanced AI-driven cybersecurity measures to protect sensitive data.
              </p>

              <h4 className="feature-heading">Key Features that Empower Your Business</h4>
          <Row className="align-items-center">
            <Col md={6}>
              
          
              <div className="keyfeatures-container">
               
                <div className="features-list">
                  <Row className="identify-cards">
                    {/* Feature 1 */}
                    <Col md={5} className="feature-point">
                      <div className="feature-icon">
                        <FaShieldAlt size={30} />
                      </div>
                      <div className="feature-text">
                        <strong>Strong Authentication:</strong><br />
                        Safeguards user data with top-notch security measures.
                      </div>
                    </Col>

                    {/* Feature 2 */}
                    <Col md={5} className="feature-point">
                      <div className="feature-icon">
                        <FaRegLightbulb size={30} />
                      </div>
                      <div className="feature-text">
                        <strong>User Experience Focus:</strong><br />
                        Delivers intuitive and user-friendly interfaces.
                      </div>
                    </Col>

                    {/* Feature 3 */}
                    <Col md={5} className="feature-point">
                      <div className="feature-icon">
                        <FaTachometerAlt size={30} />
                      </div>
                      <div className="feature-text">
                        <strong>Performance Optimization:</strong><br />
                        Guarantees a fast and seamless system.
                      </div>
                    </Col>

                    {/* Feature 4 */}
                    <Col md={5} className="feature-point">
                      <div className="feature-icon">
                        <FaLayerGroup size={30} />
                      </div>
                      <div className="feature-text">
                        <strong>Scalability:</strong><br />
                        Grows alongside your business needs.
                      </div>
                    </Col>

                    {/* Feature 5 */}
                    <Col md={5} className="feature-point">
                      <div className="feature-icon">
                        <FaPlug size={30} />
                      </div>
                      <div className="feature-text">
                        <strong>Seamless Integration:</strong><br />
                        Easily connects with your current systems.
                      </div>
                    </Col>

                    {/* Feature 6 */}
                    <Col md={5} className="feature-point">
                      <div className="feature-icon">
                        <FaChartLine size={30} />
                      </div>
                      <div className="feature-text">
                        <strong>Data Analytics:</strong><br />
                        Provides insights into user behavior for continuous improvement.
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-image">
                <img
                  src={abt_img}
                  alt="About Us"
                  title="About Our Company"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>

      <div className="about abt-why-sec section-sm ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ms-auto">
              <div className="rounded p-sm-5 px-3 py-5 inner-ser-sec">
                <h3 className="section-title toggle-line ">
                  Why Partner with Us?
                </h3>
                <p className=" mb-4 section-paragraph">
                  At Securoak, we are dedicated to being your trusted partner in navigating the complexities of digital identity transformation. Together, we will unlock new possibilities for your organization’s success in the ever-evolving digital landscape.
                </p>
                <div className="container mt-3 container-double ">
                  <div className="row text-start h-20 ">
                    <div className="col circle-logo text-start h-20">
                      • Industry Expertise<br />
                      • Tailored Solutions <br />
                      • Long-Term Partnership
                    </div>
                    <div className="col circle-logo text-start">
                      • Comprehensive Approach <br />
                      • Proven Results
                    </div>
                  </div>
                </div>
                <Link to="/identity-access-management" className="ser-learn btn-primary mt-4"
                  onClick={(e) => {
                    setTimeout(() => {
                      const element = document.getElementById("identify"); // Make sure the ID matches
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
            </div>
          </div>
        </div>
      </div>


      
      {/* <section className="content-section">
        <Container fluid>
          <div className="content-container">
            <Row className="align-items-center">
              <Col md={8} className="form-container1">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h5 className="section-title-sm form-container-head1">Best Reason</h5>
                      <h2 className="section-title toggle-line">
                        Why Choose Us
                      </h2>
                    </div>
                    
                    <div id="accordion" className="mb-md-50">
                      <div className="card border-0 mb-4">
                        <div className="card-header bg-gray border p-0">
                          <a
                            className="card-link toggle-card-title h5 d-block text-dark mb-0 py-10 px-4"
                            data-toggle="collapse"
                            href="#collapseOne"
                          >
                            <i className="fa-solid fa-plus mr-2 "></i> Enhanced Security
                          </a>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          data-parent="#accordion"
                        >
                          <div className="card-body toggle-container-para font-secondary text-color pl-0 pb-0">
                            Prevent unauthorized access to sensitive data
                          </div>
                        </div>
                      </div>
                      <div className="card border-0 mb-4">
                        <div className="card-header bg-gray border p-0">
                          <a
                            className="collapsed card-link toggle-card-title h5 d-block text-dark mb-0 py-10 px-4"
                            data-toggle="collapse"
                            href="#collapseTwo"
                          >
                            <i className="fa-solid fa-plus mr-2"></i> Simplified Access Control
                          </a>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body toggle-container-para font-secondary text-color pl-0 pb-0">
                            Manage users, roles, and access levels with ease
                          </div>
                        </div>
                      </div>
                      <div className="card border-0 mb-4">
                        <div className="card-header bg-gray border p-0">
                          <a
                            className="collapsed card-link toggle-card-title h5 d-block text-dark mb-0 py-10 px-4"
                            data-toggle="collapse"
                            href="#collapseThree"
                          >
                            <i className="fa-solid fa-plus mr-2"></i> Regulatory Compliance
                          </a>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body toggle-container-para font-secondary text-color pl-0 pb-0">
                            Stay compliant with industry standards and regulations
                          </div>
                        </div>
                      </div>

                      <div className="card border-0 mb-4">
                        <div className="card-header bg-gray border p-0">
                          <a
                            className="collapsed card-link toggle-card-title h5 d-block text-dark mb-0 py-10 px-4"
                            data-toggle="collapse"
                            href="#collapseFour"
                          >
                            <i className="fa-solid fa-plus mr-2"></i> Enhanced User Experience
                          </a>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body toggle-container-para font-secondary text-color pl-0 pb-0">
                            Ensure users enjoy a seamless access experience
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>




                
              <Col className="form-details" md={4}>
                <div className="mb-50 form-container">
                  <h5 className="mb-20 toggle-line toggle-line-form">Request Free Consultation</h5>
                  <form action="#" className="row">
                    <div className="col-12 form-input-padding">
                      <input
                        type="text"
                        className="form-control inner-form"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-12 form-input-padding">
                      <input
                        type="email"
                        className="form-control inner-form"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div className="col-12 form-input-padding">
                      <input
                        type="text"
                        className="form-control inner-form "
                        name="phone"
                        id="phone"
                        placeholder="phone"
                        required
                      />
                    </div>

                    <div className="col-12 form-input-padding">
                      <input
                        type="text"
                        className="form-control inner-form"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-12 form-input-padding">
                      <textarea
                        name="question"
                        id="question"
                        className="form-control p-2 inner-form"
                        placeholder="Your Question Here..."
                      ></textarea>
                    </div>
                    <div className="col-12 button">
                      <button
                        className="btn btn-primary ser-learn2"
                        type="submit"
                        value="send"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </Col>


            </Row>
          </div>
        </Container>
      </section> */}
      <Footer />
    </div>
  );
};

export default Identity;
