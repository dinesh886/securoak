import React from "react";
import "./about.scss";
import "./about.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "@fortawesome/fontawesome-free/css/all.min.css";
import abt_img from "../components/assests/about.jpg";
import about_banner from '.././components/assests/abt.jpg'
import first_img from '.././components/assests/abt-secound.png'

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const strategies = [
    { title: "Holistic Solutions", description: "Offer integrated services in Identity and Access Management (IAM), application integration, and IT outsourcing." },
    { title: "Collaboration", description: "Partner with clients to align services with their goals for better value and performance." },
    { title: "Talent and Expertise", description: "Utilize a skilled team and partnerships to provide tailored solutions for local markets." },
    { title: "Focus on Compliance", description: "Highlight risk management and compliance to meet regulations and enhance security." }
];


const goals = [
  { title: "Enhance Client Resilience", description: "Improve organizational resilience against cybersecurity threats." },
  { title: "Streamline Operations", description: "Boost operational efficiency to help organizations focus on core tasks." },
  { title: "Foster Innovation", description: "Enable businesses to explore growth through customized IT solutions." },
  { title: "Achieve Sustainable Growth", description: "Promote innovation and efficiency for clients' long-term success." }
];


const ideals = [
  { title: "Client-Centric Approach", description: "Focus on client needs with tailored solutions that match their goals." },
  { title: "Continuous Improvement", description: "Foster a culture of innovation to stay ahead in the digital world." },
  { title: "Integrity and Trust", description: "Build strong relationships with clients based on transparency and ethics." },
  { title: "Empowerment", description: "Equip organizations with the tools and expertise for successful digital transformation." }
];


  return (
    <div className="about-page"id="services" >
      <Header aboutPage={true} />
      <div className="about-image-container">
        <img
          src={about_banner}
          alt="A depiction of the company's philosophy"
          className="about-page-image"
        />

        <div className="overlay-text">
          <h1>About Us</h1>
          <p>Home / About Us</p>
        </div>
      </div>
      <div>
        {/* Philosophy Section */}
        <section className="section abt-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 order-2 order-lg-1">
                <div className="section-title section-title-border-half abt-inner-title">
                Who we are ? 
                </div>

                <p style={{textAlign:"justify"}}>
                Securoak is a leader in digital security and IT innovation, tackling complex cybersecurity and infrastructure challenges for businesses. Our mission is to deliver advanced solutions that enhance performance and protect organizations, resulting in improved resilience and operational efficiency. With expertise in Identity and Access Management (IAM), application integration, and IT outsourcing, we offer tailored services, including API development and managed IT solutions that drive measurable outcomes.
                </p>
                <p  style={{textAlign:"justify"}}>
               <b> Why We Stand Out?</b><br></br>
                Securoak stands out with a talent-rich team, strategic partnerships, and local expertise. Our holistic solutions encompass robust identity services, seamless application integration, and comprehensive IT infrastructure support. We prioritize risk management, client-centric delivery, and operational efficiency, driving innovation and sustainable growth for organizations while ensuring compliance and enhancing security.

{" "}
                </p>
              </div>
              {/* Philosophy Image */}
              <div className="col-lg-5 align-self-center order-1 order-lg-2 mb-md-50">
                <img
                  className="img-fluid inner-abt-img"
                  src={first_img}
                  alt="philosophy-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* vision mision */}
        <section class="section abt-secondary">
          <div class="container">
            <div class="row rounded bg-gray">
              <div class="col-lg-5 rounded-right ceo-image">
                <img
                  src={abt_img}
                  alt="About Us"
                  title="About Our Company"
                  loading="lazy"
                  className="ceo-inner-img"
                />
              </div>
              <div class="col-lg-7 vision-mission">
                <div class="p-5">
                  <h2 class="section-title section-title-border-half abt-inner-title">
                    Vision
                  </h2>
                  <p className="abt-para">
                  To establish a secure digital landscape where organizations can thrive by leveraging innovative IT solutions that enhance 
                    <ul className="abt-list">
                      <li>resilience</li>
                      <li>operational efficiency</li>
                      <li>compliance</li>
                      {/* <li>Efficient digital transformations</li> */}
                    </ul>
                  </p>
                </div>
                <div class="p-5 mission-div">
                  <h2 class="section-title section-title-border-half abt-inner-title">
                    Mission
                  </h2>
                  <p>
                  Securoak is committed to delivering advanced digital security and IT innovation solutions that address complex cybersecurity and infrastructure challenges, empowering organizations to unlock growth and foster innovation in a dynamic digital environment.
                    <ul className="abt-list">
                      <li>Enhance security</li>
                      <li>Efficiency</li>
                      <li>Scalable and user experience</li>
                      <li>Efficient digital transformations</li>
                      <li>empowering businesses to succeed</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="strategy-section">
  {/* <div className="strategy-header">
    <h2>Our Strategy</h2>
    <p>
      We are committed to delivering holistic solutions that empower organizations to thrive in a complex digital landscape.
    </p>
  </div> */}

  <div className="strategy-cards">
    <div className="card">
      <h3>Our Strategy</h3>
      <ul>
        {strategies.map((strategy, index) => (
          <li key={index}>
            <strong>{strategy.title}:</strong> {strategy.description}
          </li>
        ))}
      </ul>
    </div>

    <div className="card">
      <h3>Goals</h3>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            <strong>{goal.title}:</strong> {goal.description}
          </li>
        ))}
      </ul>
    </div>

    <div className="card">
      <h3>Ideals</h3>
      <ul>
        {ideals.map((ideal, index) => (
          <li key={index}>
            <strong>{ideal.title}:</strong> {ideal.description}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

      </div>

      <Footer />



      
    </div>
  );
}

export default About;
