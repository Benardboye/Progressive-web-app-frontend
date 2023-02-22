import React from "react";
import Banner from "../../components/banner/Banner";
import Hero from "../../components/hero/Hero";

import NewsGrid from "../../components/grid/Grid"
import "./home.scss";
const Home = () => {
  return (
    <div>
      <Hero />
      <section className="section-1">
        <NewsGrid />
      </section>
      <section className="section-2">
        <Banner />
      </section>
    </div>
  );
};

export default Home;
