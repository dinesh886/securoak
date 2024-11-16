import React from "react";
import "./identity.scss";
import "./identity.css";

import baanner from '.././components/assests/Unpacking-Djangos-api.png'
import baanner2 from '.././components/assests/keyfeaturesimg.jpg'
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "@fortawesome/fontawesome-free/css/all.min.css";
import abt_img from "../components/assests/service-2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
;

const ApiDevelopment = () => {
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
    <div className="identity-page" id="api">
      <Header identityPage={true} />

      {/* Image and Overlay Section */}
      <div className="identity-image-container">
        <img
          src={ baanner}
          alt="A depiction of the company's philosophy"
          className="identity-page-image"
        />
        <div className="overlay-text">
          <h1>Api Development</h1>
          <p>Home  <i class="fa-solid fa-greater-than benner-icon"></i> Api Development</p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="content-section">
        <Container fluid>
          <div className="content-container">
            <Row className="align-items-center">
              <Col md={6}>
                <div className="section-header sec-start">
                  {/* <div className="title" id="identity-heading">
                    Secure, Simplified Access 
                  </div> */}
                  <h3 className="toggle-line">Empowering Your Business with Efficient API Development</h3>
                </div>
                {/* toggle icon */}

                <p>
                Securoak’s API Development services offer secure, scalable, and efficient solutions tailored to your business needs. Whether you're building new APIs or optimizing existing ones, we provide the expertise to ensure seamless integration, enhanced functionality, and smooth communication between systems. 
                </p>

                <div className="keyfeatures-container">

                  <div className="keyfeatures-container-points">
                    <div className="container">
                      <div className="row">
                        <div className="point">
                          <span><i className="fa-solid fa-greater-than"></i></span>
                          <div>
                          Data Security:<br/>
                          Top-tier encryption and access control.<br />
                          
                          </div>
                        </div>
                        <div className="point">
                          <span><i className="fa-solid fa-greater-than"></i></span>
                          <div>
                          Cost Efficiency:<br/>
                          Pay only for what you use.<br />
                          
                          </div>
                        </div>
                        <div className="point">
                          <span><i className="fa-solid fa-greater-than"></i></span>
                          <div>
                          Reliability:<br/>
                          99.9% uptime with failover support.<br />
                        
                          </div>
                        </div>
                        <div className="point">
                          <span><i className="fa-solid fa-greater-than"></i></span>
                          <div>
                          Integration:<br/>
                          Smooth connection across all systems.<br />
                          
                          </div>
                        </div>
                       <div className="point">
                          <span><i className="fa-solid fa-greater-than"></i></span>
                          <div>
                          Monitoring::<br />
                          Real-time insights for optimal performance.
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>


                </div>
              </Col>
              <Col md={6}>
                <div className="about_image">
                  <img
                    src={baanner2 }
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
                Why Choose Securoak for API Development?
                </h3>
                <p className=" mb-4 section-paragraph">
                Our API solutions are designed to meet your unique business needs, providing flexibility, security, and performance. Whether you're building new APIs or optimizing existing ones, Securoak ensures smooth integration and expert support, allowing you to focus on innovation without worrying about backend complexities.<br></br><br></br>
                Choose Securoak for tailored API development, offering seamless integration, strong security, 24/7 support, and scalable performance.
                </p>
                
                {/* <div class="container mt-3 container-double ">
                  <div class="row text-start h-20 ">
                    <div class="col circle-logo  text-start h-20">
                      <i class="fa-solid fa-circle-check "></i> security <br />
                      <i class="fa-solid fa-circle-check "></i> stay compliant with <p>industry standards</p>



                    </div>
                    <div class="col circle-logo  text-start">
                      <i class="fa-solid fa-circle-check "></i> robust authentication <span>methods</span> <br />
                      <i class="fa-solid fa-circle-check "></i> seamless integration

                    </div>

                  </div>
                </div> */}
                <a href="/securoak10/api-developement" className="ser-learn btn-primary mt-4">
                  Know more
                  <span className="arrow_right">
                    <FaArrowRightLong aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="content-section">
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
                    {/* Accordion */}
                    <div id="accordion" className="mb-md-50">
                      <div className="card border-0 mb-4">
                        <div className="card-header bg-gray border p-0">
                          <a
                            className="card-link toggle-card-title h5 d-block text-dark mb-0 py-10 px-4"
                            data-toggle="collapse"
                            href="#collapseOne"
                          >
                            <i className="fa-solid fa-plus mr-2 "></i> Seamless Integration:
                          </a>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          data-parent="#accordion"
                        >
                          <div className="card-body toggle-container-para font-secondary text-color pl-0 pb-0">
                          Effortlessly connect systems for smooth data flow.
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
                            <i className="fa-solid fa-plus mr-2"></i> High Security:
                          </a>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body toggle-container-para font-secondary text-color pl-0 pb-0">
                          Ensure secure communication with strong encryption and access control.
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
                            <i className="fa-solid fa-plus mr-2"></i> 24/7 Support:
                          </a>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body toggle-container-para font-secondary text-color pl-0 pb-0">
                          Round-the-clock assistance for any API-related issues.
                          </div>
                        </div>
                      </div>

                      <div className="card border-0 mb-4">
                        <div className="card-header bg-gray border p-0">
                          <a
                            className="collapsed card-link  toggle-card-title h5 d-block text-dark mb-0 py-10 px-4"
                            data-toggle="collapse"
                            href="#collapsefour"
                          >
                            <i className="fa-solid fa-plus mr-2"></i> Scalable Performance
                          </a>
                        </div>
                        <div
                          id="collapsefour"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body  toggle-container-para font-secondary text-color pl-0 pb-0">
                          Adapt to increasing demands without compromising efficiency
                          </div>
                        </div>
                      </div>

                      <div className="card border-0 mb-4">
                        <div className="card-header bg-gray border p-0">
                          <a
                            className="collapsed card-link  toggle-card-title h5 d-block text-dark mb-0 py-10 px-4"
                            data-toggle="collapse"
                            href="#collapsefive"
                          >
                            <i className="fa-solid fa-plus mr-2"></i> Faster Innovation
                          </a>
                        </div>
                        <div
                          id="collapsefive"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body  toggle-container-para font-secondary text-color pl-0 pb-0">
                          Reduce development time and speed up time-to-market.
                          </div>
                          <hr />
                        
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
                    <div className="col-12 form-columns form-input-padding">
                      <input
                        type="text"
                        className="form-control inner-form"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-12 form-columns form-input-padding">
                      <input
                        type="email"
                        className="form-control inner-form"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div className="col-12 form-columns form-input-padding">
                      <input
                        type="text"
                        className="form-control inner-form"
                        name="phone"
                        id="phone"
                        placeholder="phone"
                        required
                      />
                    </div>

                    <div className="col-12 form-columns form-input-padding">
                      <input
                        type="text"
                        className="form-control inner-form"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-12 form-columns form-input-padding">
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
      </section>


      <Footer />
    </div>
  );
};

export default ApiDevelopment;
