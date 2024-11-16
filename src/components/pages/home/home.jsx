import React, { useEffect } from "react";
import "./home.scss";
 
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";// Ensure you have this import
import { IoColorFill } from "react-icons/io5";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const starContainer = document.querySelector(".star-container");
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 15 + 15}s`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <section>
      <div className="banner_bg">
        <div className="star-container" aria-hidden="true">
          <Container>
            <Row>
              <Col md={8} className="height_adjust">
                <h1 className="sub_title_one"  style={{color:"#007bff"}}
                  >Securing Your Digital World</h1>
                <h2 className="title_one" data-aos="fade-up" data-aos-delay="100">Elevate Your IT Landscape with </h2>
             
                <h2 className="title_two typing-animation"  data-aos="fade-up"
                  data-aos-delay="200">Securoak’s AI-Driven Cyber Solutions</h2>
               
                <h2 className="title_two highlight"  data-aos="fade-up"
                  data-aos-delay="400"  style={{color:"#007bff"}}>Secure.Innovate.Thrive </h2>
                

                <div className="two_buttons" data-aos="fade-up" data-aos-delay="450">
                  <Link
                    to="/identity-access-management" 
                    aria-label="Learn more about our services"
                  >
                    <div className="service">Upcomming Events</div>
                  </Link>

                  {/* <Link
                    to="/Client"
                    aria-label="Learn more about our clients"
                  >
                    <div className="clients">OUR CLIENTS</div>
                  </Link> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}
