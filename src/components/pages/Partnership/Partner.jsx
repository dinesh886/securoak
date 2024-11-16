import React from 'react'
import "../Partnership/partner.scss";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsCheck } from "react-icons/bs";

import { FaArrowRightLong } from "react-icons/fa6";

import cloude from "../../assests/cloud/cloud.jpg";
import partner from '../../assests/Partnership/saviynt-logo.svg'
import partner2 from '../../assests/Partnership/octa.jpg'
import partner3 from '../../assests/Partnership/xm-cyber.jpg'
import partner4 from '../../assests/Partnership/drata.jpg'
import partners from '../../assests/Partnership/partnership2.jpg'

const Partner = () => {
  return (
    <section className="cloud_full">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="cloud_cnt">
              {/* <h2 className="title">Cloud Solutions</h2> */}
              <p className="desc">Partnerships</p>

              <p className="sub_desc">
             <b> Industry Leading IDAM Solutions: </b>
               Establishing a Comprehensive Defense Strategy : Empowering and protecting premier organizations with an integrated platform.
              Simplify access policy management, clearly define group memberships, and seamlessly enforce security protocols.
              </p>

              <div className="total_list">
                <div className="list">
                  <div className="para partner-one">
                    {/* <span className="tick">
                      <BsCheck aria-hidden="true" />
                    </span> */}
                    {/* <span className="titles">
                     Industry Leading IDAM Solutions:
                    </span> */}
                    <img src={partner} alt="" srcset="" />
                  </div>
                  <div className="para partner-two">
                    {/* <span className="tick">
                      <BsCheck aria-hidden="true" />
                    </span> */}
                    {/* <span className="titles">
                      Scalable infrastructure for future growth
                    </span> */}
                      <img src={partner2} alt="" srcset="" />
                  </div>
                </div>
                <p className="sub_desc">
              <b>Industry Leading IDAM Solutions: </b>
               Establishing a Comprehensive Defense Strategy : Empowering and protecting premier organizations with an integrated platform.
              Simplify access policy management, clearly define group memberships, and seamlessly enforce security protocols.
              </p>
                <div className="list">
                  <div className="para partner-three">
                    {/* <span className="tick">
                      <BsCheck aria-hidden="true" />
                    </span>
                    <span className="titles">
                    

                    </span> */}
                    <img src={partner4} alt="" srcset="" />
                  </div>
                  <div className="para partner-four">
                    {/* <span className="tick">
                      <BsCheck aria-hidden="true" />
                    </span>
                    <span className="titles">
                      Disaster recovery solutions for business continuity
                    </span> */}
                      <img src={partner3} alt="" srcset="" />
                  </div>
                </div>
              </div>

              {/* <button className="learn">
                <Link
                  to="/CloudSolutions" 
                  aria-label="Learn more about our cloud solutions"
                  onClick={(e) => {
                    setTimeout(() => {
                      const element = document.getElementById("cloud"); 
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
              </button> */}
            </div>
          </Col>
          <Col md={6}>
            <div className="image">
              <img src={partners} alt="Cloud solutions overview" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Partner
