import React, { Component } from "react";

import Header from "components/Header/header";
import HeroSection from "components/HeroSection/HeroSection2";
import PromoSection from "components/PromoSection/Promo2";
import RideSection from "components/AboutUs/AboutUs6";
import FareSection from "components/FareEstimate";
import RoundUp from "components/RoundUp";
import FeatureSection from "components/Features/Feature2";
import BlogSection from "components/Blog";
import VideoSection from "components/Video";
import PricingSection from "components/Pricing";
import Testimonial from "components/Testimonial";
import Screenshots from "components/Screenshots";
import Contact from "components/Contact";
import FaqSection from "components/Faq";
import TeamMember from "components/TeamMember";
import ContactSection from "components/Contact";
import TrustedCompany from "components/TrustedCompany/TrustedCompany";
import SubscribeSection from "components/Subscribe";
import FooterSection from "components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          {/*<PromoSection />*/}
          <RideSection />
          <RoundUp />
          <FareSection />
          {/*<FeatureSection />*/}
          {/*<Screenshots />*/}
          <BlogSection />
          <Contact />
          {/*<VideoSection showDownloadBtn={true} />*/}
          {/*<PricingSection showTitle={true} hideFaq={true} />*/}
          {/*<Testimonial />*/}
          {/*<Screenshots />*/}
          {/*<FaqSection />*/}
          {/*<TeamMember />*/}
          {/*<ContactSection />*/}
          {/*<TrustedCompany />*/}
        </div>
        {/*<SubscribeSection />*/}
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
