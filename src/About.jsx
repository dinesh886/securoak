import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";

import AboutC from "./pages/About"; // Renamed import
import Service from "./components/pages/service/service";
import Client from "./components/pages/clients/client";
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";
import Image from "./components/pages/image_container/image";
import Video from "./components/pages/video/video";
import Intel from "./components/pages/intelligence/intel";
import Digital from "./components/pages/digital/digital";
import Design from "./components/pages/design/design";
import Api from "./components/pages/api_developement/api";
import Cloud from "./components/pages/cloud/cloud";
import Header from "./components/header/header";
import Home from "./components/pages/home/home";

export default function About() {
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
          <AboutC /> {/* Use the renamed import here */}
          <Footer />
        </>
      )}
    </section>
  );
}
