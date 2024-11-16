import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";

import About from "./components/pages/about/about";
import Service from "./components/pages/service/service";
import Client from "./components/pages/clients/client";
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";

import Video from "./components/pages/video/video";
import Intel from "./components/pages/intelligence/intel";
import Digital from "./components/pages/digital/digital";
import Design from "./components/pages/design/design";
import Api from "./components/pages/api_developement/review";
import Cloud from "./components/pages/cloud/cloud";
import Header from "./components/header/header";
import Home from "./components/pages/home/home";
import Partner from "./components/pages/Partnership/Partner";
import Whypartner from "./pages/PartnerwithUs/Whypartner";
import CustomerIdentity from "./components/pages/HomeCustomerIdentity/CustomerIdentity";
import HdigitalIdentity from "./components/pages/HomeDigitalIdentity/HdigitalIdentity";
import IdentityGovernance from "./components/pages/IdentityGovernance/IdentityGovernance";
import WhoWeAre from "./components/pages/Who-We-Are/WhoWeAre";
import WhyWeStandOut from "./components/pages/Why-WeStand-Out/WhyWeStandOut";
import UpcommingEvents from "./components/pages/UpcommingEvents/UpcommingEvents";
import ClientTestimonial from "./components/pages/Testimonial/ClientTestimonial";




export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="main_full">
      {loading ? (
        <Loader />
      ) : (
        <>
       
          <Header />
          <Home />
    
     {/* <Whypartner /> */}
<WhoWeAre />
<WhyWeStandOut />
          <Service />
          <Video />
         
          {/* <ClientTestimonial /> */}
          <Client />
          <Partner />
{/*         
          <HdigitalIdentity />
          <CustomerIdentity />
          <Intel /> */}
          {/* <IdentityGovernance /> */}
          {/* <Design />
          <Digital />
          <Api />
          <Cloud /> */}
         
          <Footer />
        </>
      )}
    </section>
  );
}
