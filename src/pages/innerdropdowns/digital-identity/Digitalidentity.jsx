import React, { useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaUsers, FaChartLine, FaCogs, FaHandshake, FaLock } from "react-icons/fa";
import "./Digitalidentity.scss"; // Ensure to create a corresponding SCSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../../components/header/header";
import yourImage from '../../innerdropdowns/gigital-identity.jpg';
import journey from '../../innerdropdowns/journey.jpg';
import digital from '../../innerdropdowns/gigital-identity.jpg'; // Corrected the image path
import banner from '../../../components/assests/identitybanner.jpg';
import Footer from "../../../components/footer/footer";
const Digitalidentity = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };

    
  }, []);

  const identityOfferings = [
    { title: "CIAM", description: "Customer Identity & Access Management", icon:  <dotlottie-player 
      src="https://lottie.host/f34b3a84-8e67-4a82-8c3a-3cbefc236005/pmCGJQjsau.json"
      background="transparent"
      speed="1"
      style={{ width: '300px', height: '300px' }}
      loop
      autoplay
    ></dotlottie-player> },
    { title: "WIAM", description: "Workforce Identity & Access Management", 
      icon:  <dotlottie-player 
      src ="https://lottie.host/7d88e853-16f5-4510-bc94-2d11fa198b03/GuQiF5rjdP.json"
      background="transparent"
      speed="1"
      style={{ width: '300px', height: '300px' }}
      loop
      autoplay
    /> },
    { title: "IG", description: "Identity Governance", icon:  <dotlottie-player 
      src="https://lottie.host/bda6d6d4-a8b7-47b0-9fc1-c1da5e63e3d5/d6IH4QWwD3.json"
      background="transparent"
      speed="1"
      style={{ width: '300px', height: '300px' }}
      loop
      autoplay
    ></dotlottie-player>},
    { title: "PAM", description: "Privilege Access Management", icon:  <dotlottie-player 
      src="https://lottie.host/3563eb90-1865-4187-a4c8-cc1ee2a6cf53/GvpdGqHrBt.json"
      background="transparent"
      speed="1"
      style={{ width: '300px', height: '300px' }}
      loop
      autoplay
    ></dotlottie-player> }
  ];

  const journeySteps = [
    { icon: <FaUsers />, title: "Consultation and Discovery", description: "Consultation and Discovery: We begin with in-depth consultations to assess your current identity management landscape." },
    { icon: <FaChartLine />, title: "Strategic Planning", description: "Strategic Planning: Together, we develop a comprehensive roadmap that outlines the key steps in your digital identity transformation journey." },
    { icon: <FaCogs />, title: "Implementation", description: "Implementation: Our experienced team executes the transformation plan, leveraging cutting-edge technologies and industry best practices." },
    { icon: <FaHandshake />, title: "Ongoing Collaboration", description: "Ongoing Collaboration: Your journey doesn’t end with implementation. We maintain open communication and provide ongoing support." },
   
  ];

  const partnerReasons = [
    { icon: <FaUsers />, title: "Industry Expertise", description: "Our team comprises recognized leaders in digital identity transformation." },
    { icon: <FaChartLine />, title: "Tailored Solutions", description: "We craft personalized strategies that address your unique challenges." },
    { icon: <FaCogs />, title: "Comprehensive Approach", description: "Our holistic strategy covers every aspect of identity management." },
    { icon: <FaHandshake />, title: "Proven Results", description: "We focus on delivering measurable outcomes that drive business value." },
    { icon: <FaLock />, title: "Long-Term Partnership", description: "Our commitment to your success extends beyond implementation." },
  ];
  const potentialItems = [
    { icon: <FaUsers />, text: "Personalized Solutions: Tailored identity management strategies that align with your organization’s unique objectives." },
    { icon: <FaLock />, text: "Robust Authentication: Advanced authentication methods enhance security and protect sensitive information." },
    { icon: <FaCogs />, text: "Seamless Integration: Effortless integration with existing systems streamlines processes." },
    { icon: <FaChartLine />, text: "User-Friendly Design: Intuitive interfaces and self-service options simplify identity management." },
    { icon: <FaHandshake />, text: "Compliance Support: Guidance in navigating regulatory requirements and adhering to industry standards." },
    { icon: <FaLock />, text: "Ongoing Support and Monitoring: Continuous support and proactive monitoring address emerging security challenges." },
  ];
  return (
    <>
      <Header identityPage={true} />
      <div className="identity-image-container">
        <img
          src={banner}
          alt="A depiction of the company's philosophy"
          className="identity-page-image"
        />
        <div className="overlay-text">
          <h1> Digital Identity Transformation Program</h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> identity Offerings <i className="fa-solid fa-greater-than benner-icon"></i> Digital Identity Transformation Program</p>
        </div>
      </div>
      <Container className="digital-identity-container">
         
        {/* Identity Offerings Section */}
        {/* <h2 className="text-center mb-4 identity-offerings-title">Digital Identity Transformation Program</h2> */}
        <p className="text-center mb-5 identity-offerings-description">
        Securoak’s Identity Offerings integrate AI-enhanced cybersecurity with CIAM, WIAM, Identity Governance, PAM, Digital Identity Transformation, and Managed Support Services. These solutions strengthen security, streamline access management, and ensure compliance, all while providing 24/7 support. By leveraging AI, we empower organizations to protect sensitive data, optimize operations, and enhance user experiences for customers and employees in a secure environment.
        </p>
        {/* <div className="identity-offerings-grid">
          {identityOfferings.map((offering, index) => (
            <Card key={index} className="identity-offerings-card">
              <Card.Body>
                <div className="icon-container">
                <div className="gif"> {offering.icon}</div>
                </div>
                <Card.Title className="card-title">{offering.title}</Card.Title>
                <Card.Text>{offering.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div> */}

        {/* Digital Identity Transformation Program Section */}
        <div className="identity-section-background mt-4">
  <Row className="align-items-center">
    <Col md={6} >
      <h2 className="text-center identity-offerings-title">Your Journey to Enhanced Digital Identity Management with Securoak</h2>
      <p className="text-center">
      At Securoak, we view your journey toward optimized digital identity management as a collaborative endeavor focused on success. From our initial engagement, we dedicate ourselves to understanding your unique needs and goals, ensuring our AI-driven solutions align seamlessly with your vision. Together, we will unlock your organization’s full potential through a comprehensive approach to identity management.
      </p>
    </Col>
    <Col md={6} className="d-flex justify-content-center">
      <img src={digital } alt="Digital Identity Transformation" className="big-image" />
    </Col>
  </Row>
</div>


<h2 className="text-center mb-4 potential-title">Journey with Us</h2>

<Card className="mb-4 potential-card">
  <Card.Body className="d-flex flex-row">
    <div className="content-column">
      <ListGroup variant="flush">
      {journeySteps.map((item, index) => (
  <ListGroup.Item key={index} className="list-item">
    <span>{item.description}</span>
  </ListGroup.Item>
))}

      </ListGroup>
    </div>
    <div className="image-column">
    <img src={journey } alt="" srcset="" className="big-image"/>
    </div>
  </Card.Body>
</Card>






    {/* Why Partner with Us Section */}
<div className="partner-section-bg p-4">
  <h2 className="partner-title">Why Partner with Us?</h2>
  <Row>
  {partnerReasons.map((reason, index) => (
    <Col md={4} key={index} className="mb-4">
      <Card className="partner-card">
        <Card.Body>
          <div className="d-flex align-items-center">
            {/* <span>&bull; </span> */}
            <h5 className="mb-3 card-title">{reason.title}</h5>
          </div>
          <p className="card-para">{reason.description}</p>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

</div>



    {/* Unlocking Business Potential Section */}
{/* Unlocking Business Potential Section */}
<h2 className="text-center mb-4 potential-title">Unlocking Business Potential</h2>

<Card className="mb-4 potential-card">
  <Card.Body className="d-flex flex-row">
    <div className="content-column">
      <ListGroup variant="flush">
      {potentialItems.map((item, index) => (
  <ListGroup.Item key={index} className="list-item">
    <span>{item.text}</span>
  </ListGroup.Item>
))}

      </ListGroup>
    </div>
    <div className="image-column">
    <dotlottie-player 
    src="https://lottie.host/b6f681e0-7777-4f16-83f5-b6f2bb35c65a/ExvDWUEra1.json"
    background="transparent"
    speed="1"
    className="potential-lottie"
    loop
    autoplay
  ></dotlottie-player>
    </div>
  </Card.Body>
</Card>



      </Container>
      <Footer />
    </>
  );
};

export default Digitalidentity;
