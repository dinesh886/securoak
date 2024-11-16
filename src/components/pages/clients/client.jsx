import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "../clients/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { IoStarSharp } from "react-icons/io5";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import prev/next icons
import 'react-toastify/dist/ReactToastify.css';
import "./review.scss";

export default function Review() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);
  const [liked, setLiked] = useState(false);

  const swiperRefLocal = useRef();

  const handleShow = (index) => {
    setSelectedReviewIndex(index);
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
    setSelectedReviewIndex(null);
  };

  const handleLike = () => {
    setLiked(true);
    toast.success('Thank you for liking the review!', {
      position: "bottom-right",
      autoClose: 2000,
    });
    setTimeout(() => setLiked(false), 2000);
  };

  // Navigate to the previous review
  const handlePrev = () => {
    if (selectedReviewIndex > 0) {
      setSelectedReviewIndex(selectedReviewIndex - 1);
    }
  };

  // Navigate to the next review
  const handleNext = () => {
    if (selectedReviewIndex < Data.length - 1) {
      setSelectedReviewIndex(selectedReviewIndex + 1);
    }
  };

  return (
    <section className="review-section">
      <Container fluid className="review-container">
      <Row className="justify-content-center">
  <Col md={12} className="text-center">
    <h2 className="title">Client Testimonial</h2>
    <p className="desc">Securing 60,000+ Identities with Saviynt</p>
    <div className="stars-stars">
      {[...Array(5)].map((_, i) => (
        <IoStarSharp key={i} style={{ color: '#f47721', fontSize: '20px' }} />
      ))}
    </div>
    <div className="testimonial">
      <p className="quote">
        "I am immensely satisfied with the collaboration with Securoak. Their expertise, commitment, and support throughout the project have been invaluable. Together, we have transformed our identity governance framework, and I wholeheartedly recommend them for any future projects."
      </p>
      <p className="author">
        — David Fiorina, <span className="role">Head of Cyber Security, Bunnings</span>
      </p>
    </div>
  </Col>
</Row>



        <Row>
          <Col md={12}>
            <div
              onMouseEnter={() => swiperRefLocal.current?.swiper?.autoplay?.stop()}
              onMouseLeave={() => swiperRefLocal.current?.swiper?.autoplay?.start()}
            >
              <Swiper
                loop={true}
                ref={swiperRefLocal}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={500}
                slidesPerView={4}
                spaceBetween={7}
                breakpoints={{
                  1366: { slidesPerView: 4 },
                  1024: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  425: { slidesPerView: 1 },
                }}
                className="mySwiper review-swiper"
              >
                {Data.map((value, index) => (
                  <SwiperSlide key={index}>
                    <div className="review-slider">
                      <div className="main">
                        <div className="image-container">
                          <div className="title">{value.Title}</div>
                        </div>
                        
                        <div className="content">
                          {value.Content.substring(0, 200)}...
                        </div>
                        <h6 className="read-more" onClick={() => handleShow(index)}>
                          Read more
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal
        show={modalShow}
        onHide={handleClose}
        className="custom-modal"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{Data[selectedReviewIndex]?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: 'auto', width: "auto", overflowY: 'auto' }}>
          <p className="popup-para">{Data[selectedReviewIndex]?.Content}</p>
          <ul>
            {Data[selectedReviewIndex]?.list?.map((item, index) => (
              <li key={index} className="popup-list">{item}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          {/* Previous and Next buttons */}
          <Button variant="secondary" onClick={handlePrev} disabled={selectedReviewIndex === 0}>
            <FaChevronLeft /> Prev
          </Button>
          <Button variant="secondary" onClick={handleNext} disabled={selectedReviewIndex === Data.length - 1}>
            Next <FaChevronRight />
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="summary">
  <p>
    <strong>In Summary:</strong> Through our strategic partnership, <strong>Securoak</strong> empowered the client to secure their identities effectively and enhance their governance framework, laying the foundation for a more secure and compliant future.
  </p>
</div>

      <ToastContainer />
    </section>
  );
}
