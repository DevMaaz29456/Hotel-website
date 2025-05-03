import React from "react";
import Hero from "../components/Hero";
import FeatureDestination from "../components/FeatureDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonials from "../components/Testimonials";
import NewsLatter from "../components/NewsLatter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureDestination />
      <ExclusiveOffers />
      <Testimonials />
      <NewsLatter />
    </>
  );
};

export default Home;
