import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLock, FaUserShield, FaTachometerAlt, FaExpand, FaPlug, FaChartLine } from "react-icons/fa";
import './CustomerIdentity.scss';

const Customeridentity = () => {
  return (
    <Container fluid className="ciam-container">
      {/* Section 1: Introduction */}
      <Row className="ciam-intro-section align-items-center mb-4">
        <Col md={12} className="text-center">
          <h2>Customer Identity and Access Management (CIAM)</h2>
          <p className="ciam-intro-text">
            At Securoak, we deliver innovative CIAM solutions that empower your customers to securely manage their personal information. Our services are meticulously designed to comply with international regulations, fostering trust and delivering consistent experiences across web, mobile, and social media platforms.
          </p>
        </Col>
      </Row>

      {/* Section 2: Unlocking Your Potential */}
      <Row className="ciam-potential-section align-items-center">
        <Col md={12} className="text-center mb-4">
          <h3>Unlocking Your Potential</h3>
          <p className="ciam-potential-text">
            Partnering with Securoak means unlocking your organization’s full potential in the digital landscape. Our CIAM solutions enhance customer engagement, streamline operations, and build lasting relationships.
          </p>
        </Col>
      </Row>

      {/* Section 3: Key Features */}
      <Row className="ciam-features-section">
        <Col md={12} className="text-center mb-4">
          <h4>Key Features that Unlock Your Potential</h4>
        </Col>
        <Row className="ciam-feature-cards">
          <Col md={4}>
            <Card className="feature-card">
              <FaLock className="feature-icon" />
              <Card.Body>
                <Card.Title>Strong Authentication</Card.Title>
                <Card.Text>
                  Protects user data with advanced security measures, ensuring only authorized access and boosting customer confidence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <FaUserShield className="feature-icon" />
              <Card.Body>
                <Card.Title>User Experience Focus</Card.Title>
                <Card.Text>
                  Provides intuitive and user-friendly interfaces that simplify the management of personal information, enhancing customer satisfaction.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <FaTachometerAlt className="feature-icon" />
              <Card.Body>
                <Card.Title>Performance Optimization</Card.Title>
                <Card.Text>
                  Ensures fast and seamless system performance, creating a superior user experience that encourages repeat interactions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <FaExpand className="feature-icon" />
              <Card.Body>
                <Card.Title>Scalability</Card.Title>
                <Card.Text>
                  Adapts effortlessly to grow alongside your business needs, accommodating increased demand while maintaining service quality.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <FaPlug className="feature-icon" />
              <Card.Body>
                <Card.Title>Seamless Integration</Card.Title>
                <Card.Text>
                  Connects smoothly with your existing systems, minimizing disruption during implementation and maximizing operational efficiency.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <FaChartLine className="feature-icon" />
              <Card.Body>
                <Card.Title>Data Analytics</Card.Title>
                <Card.Text>
                  Delivers valuable insights into user behavior, facilitating continuous improvement and informed decision-making that drives business growth.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Customeridentity;
