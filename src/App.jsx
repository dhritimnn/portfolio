import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Experties from "./components/Experties";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    const observerOptions = {
      // Negative bottom margin shrinks the trigger zone from the bottom of the viewport
      rootMargin: "0px 0px -20% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        } else {
          entry.target.classList.remove("reveal");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".sda").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experties />
      <Footer />
    </>
  );
}

export default App;
