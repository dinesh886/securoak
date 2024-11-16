import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./whatsapp.scss";

const WhatsappIcon = () => {
  const handleClick = () => {
    window.open("https://wa.me/yourNumber", "_blank");
  };

  return (
    <div className="whatsapp-icon" onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  );
};

export default WhatsappIcon;
