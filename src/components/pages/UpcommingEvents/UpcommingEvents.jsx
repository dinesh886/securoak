import React from 'react';
import './UpcommingEvents.scss';
import event1 from './event1.jpg'; // Import the image file
import event2 from './event2.jpg'; // Import the image file
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Header from '../../header/header';
import Footer from '../../footer/footer';
import banner from "./eventsbanner.jpg";


const UpcommingEvents = () => {
  return (
    
    <section className="upcoming-events" id='upcoming-events'>
        <Header identityPage={true} />
     

 {/* Image and Overlay Section */}
 <div className="identity-image-container">
        <img
          src={banner}
          alt="A depiction of the company's philosophy"
          className="identity-page-image"
        />
        <div className="overlay-text">
          <h1>Our Upcoming Events</h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Upcoming Events</p>
        </div>
      </div>

   
      <Container className='event-container'>
     
        <Row className='event-row'> 
          {/* Event 1: Image on left, text on right */}
          <Col md={5} className="event-col ">
            <Row>
            <Col md={6} className="event-text-col">
                <p className='event-text'>
                
                 <h3 className='event-title' >AUSTRALIAN CYBER CONFERENCE</h3> <br />
                 <h6>Date : </h6>
                 <p>26 - 28 NOVEMBER 2024</p> 
                 <h6>Venue: </h6>
                  <p> Melbourne Convention & Exibition 
                    Center
                  </p>
                  <h6>Meet us at :</h6>
                  <p> Booth 41</p>
                </p>
              </Col>
              <Col md={6} className="event-img-col">
                <img src={event2} alt="Event 1" className="event-img" />
              </Col>
              
            </Row>
          </Col>
          {/* Event 2: Image on right, text on left */}
          <Col md={5} className="event-col">
            <Row>
              <Col md={6} className="event-text-col">
              <p className='event-text'>
                
                <h3 className='event-title' >AUSTRALIAN CYBER CONFERENCE</h3> <br />
                <h6>Date : </h6>
                 <p>17 - 19 MARCH 2025</p> 
                 <h6>Venue: </h6>
                  <p> Melbourne Convention & Exibition 
                    Center
                  </p>
                  <h6>Meet us at :</h6>
                  <p> Upcomimg</p>
               </p>
              </Col>
              <Col md={6} className="event-img-col">
                <img src={event1} alt="Event 2" className="event-img" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
};

export default UpcommingEvents;
