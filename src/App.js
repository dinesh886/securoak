import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Added Routes and Route
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./main";  // Assuming this is your homepage component
import About from "./pages/About"; // Assuming this is your About page component
import IdentityAccess from "./pages/IdentityAccess.js";
import Services from "./pages/Services.js";
import ScrollToTopButton from "./components/slide/slide_top";
import WhatsappIcon from "./components/whatsapp/whatsapp";
import CloudSolutions from "./pages/CloudSolutions.js";
import UiuxDesign from "./pages/UiuxDesignpage.js";
import DevopSecopOperation from "./pages/DevopSecopOperation.js";
import ApiDevelopment from "./pages/ApiDevelopment.js";
import ContactUs from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermnsandConditions from "./pages/TermnsandConditions.jsx";
import Discaimer from "./pages/Disclaimer.jsx";
import Client from "./components/pages/clients/client.jsx";
import Whypartner from "./pages/PartnerwithUs/Whypartner.jsx";
import Digitalidentity from "./pages/innerdropdowns/digital-identity/Digitalidentity.jsx";
import UpcommingEvents from "./components/pages/UpcommingEvents/UpcommingEvents.jsx";

function App() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsapp(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router exact basename="/securoak10">
      <ScrollToTopButton />
      
      {/* Define routes for your different pages */}
      <Routes >
        <Route path="/" element={<Main />} /> {/* Main (home) page */}
        <Route path="/about" element={<About />} /> {/* About Us page */}
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/identity-access-management" element={<IdentityAccess />} /> {/* About Us page */}
        <Route path="/CloudSolutions" element={<CloudSolutions />} /> 
        <Route path="/ui-ux-design" element={<UiuxDesign />} /> 
        <Route path="/devop-secops" element={<DevopSecopOperation />} /> 
        <Route path="/api-developement" element={<ApiDevelopment />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />  
        <Route path="/TermnsandConditions" element={<TermnsandConditions />} />  
        <Route path="/Discaimer" element={<Discaimer />} /> 
        <Route path="/Client" element={<Client />} /> 
        <Route path="/WhypartnerwithUs" element={<Whypartner />} /> 
        <Route path="/Digital-Identity-Transformation" element={<Digitalidentity />} /> 
        <Route path="/UpcommingEvents" element={<UpcommingEvents />} /> 
      </Routes>


      {/* Conditionally show WhatsApp icon after 2 seconds */}
      {showWhatsapp && <WhatsappIcon />}
    </Router>
  );
}

export { App };
