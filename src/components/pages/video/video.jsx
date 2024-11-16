import React from "react";
import "./video.scss";
import svgimg from "../video/undraw_online_media_re_r9qv.svg"
import { Link } from "react-router-dom";



export default function Video() {
  return (
    <div className="videosec">
      <h2>Upcoming Events</h2>
    <div className="card">
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#0613F2"><path d="M0 0v4l250 64 125-32 250 64 375-96V0H0z"></path></svg> */}
    <div className="card-content">
      <div className="card-text">

     
     <h2>AUSTRALIAN CYBER CONFERENCE</h2>
     
     <Link to="/UpcommingEvents" className="cta-button"
      onClick={(e) => {
        setTimeout(() => {
          const element = document.getElementById("upcoming-events"); // Make sure the ID matches
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 0);
      }}
     
     
     >Know More</Link>

       
      </div>
      <div className="card-video">
      <iframe 
  width="500" 
  height="315" 
  src="https://www.youtube.com/embed/BU0HuZLGSuU?autoplay=1&loop=1&mute=1&playlist=BU0HuZLGSuU" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen
  controls="0">
</iframe>




      </div>
    </div>
    {/* <svg
    viewBox="0 0 1000 100" 
    fill="#0613F2"
    className="svgimage"
      xmlns="http://www.w3.org/2000/svg" 
      style={{ transform: 'scale(1, -1)', transformOrigin: 'center' }} 
      >
        <path d="M0 0v4l250 64 125-32 250 64 375-96V0H0z"></path></svg> */}

  </div>
  </div>
  );
}
