import React from "react";

// react router dom
import { Routes, Route, useLocation } from "react-router-dom";

// pages
import Header from "./layout/Header";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import BlogDetail1 from "./pages/BlogDetail1";
import BlogDetail2 from "./pages/BlogDetail2";
import Contact from "./pages/Contact";
import FeatureDetail1 from "./pages/FeatureDetail1";
import FeatureDetail2 from "./pages/FeatureDetail2";
import Features1 from "./pages/Features1";
import Features2 from "./pages/Features2";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./layout/Footer";
import CustomScrollbar from "./components/CustomScrollbar";
import Preloader from "./components/Preloader";

const Markup = () => {
  return (
    <>
      <Preloader />
      <CustomScrollbar />
      <div className="main-wrapper">
        {/* header - start */}
        <Header type={useLocation().pathname !== "/" ? "navigation-1" : ""} />
        {/* header - end */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog-1" element={<Blog1 />} />
          <Route path="/blog-2" element={<Blog2 />} />
          <Route path="/blog-detail-1" element={<BlogDetail1 />} />
          <Route path="/blog-detail-2" element={<BlogDetail2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feature-detail-1" element={<FeatureDetail1 />} />
          <Route path="/feature-detail-2" element={<FeatureDetail2 />} />
          <Route path="/features-1" element={<Features1 />} />
          <Route path="/features-2" element={<Features2 />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        {/* footer - start */}
        <Footer />
        {/* footer - end */}
      </div>
    </>
  );
};

export default Markup;
