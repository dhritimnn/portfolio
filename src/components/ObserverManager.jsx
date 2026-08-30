import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ObserverManager() {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
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
  }, [location]);

  return null;
}
