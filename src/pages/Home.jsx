import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experties from "../components/Experties";
import BlogGreets from "../components/BlogGreets";

const Home = () => {
  return (
    <>
      <Hero />
      <BlogGreets />
      <About />
      <Experties />
    </>
  );
};

export default Home;
