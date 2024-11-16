import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "./data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import google from "../../../Images/googleicon.webp";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { IoStarSharp } from "react-icons/io5";

import "./review.scss";

export default function Review() {
  return (
    <section className="review-section">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="title">Impressive Google Reviews</h2>
            <p className="desc">
              Hear from Our Satisfied Customers at Jayam Web Solutions
            </p>
            <p className="content">
              Jayam Web Solutions offers exceptional services, backed by the{" "}
              trust of many satisfied customers. <br /> Discover what they have
              to say about our services. Discover what they have to say about
              our services. <br />
              About our services.Discover what they have to say about our
              services.
              <br />
            </p>
            <div className="stars">
              <span className="num">4.8</span>
              <span className="yellow">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </span>
              <span className="total">(70)</span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Swiper
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              navigation={true}
              loop={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
              }}
              speed={1000}
              className="mySwiper review-swiper"
            >
              {Data.map((value, index) => {
                const color = index % 2 === 0 ? "#FF6354" : "#4C4FF8";
                return (
                  <SwiperSlide key={index}>
                    <div
                      className="review-slider"
                      style={{ borderTop: `3px solid ${color}` }}
                    >
                      <div className="main">
                        <div className="image-container">
                          <img
                            src={value.Image}
                            alt={`Review by ${value.Title}`}
                            className="review-image"
                            loading="lazy"
                          />
                          <div className="title">{value.Title}</div>{" "}
                          <img
                            src={google}
                            alt="Google icon"
                            className="review-image"
                            loading="lazy"
                          />
                        </div>

                        <div className="email">
                          <a href={`mailto:${value.Email}`}>{value.Email}</a>
                        </div>
                        <div className="stars-stars">
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                          <IoStarSharp />
                        </div>
                        <div className="content">{value.Content}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <a href="/#">
              <button className="more-reviews">More Reviews</button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
