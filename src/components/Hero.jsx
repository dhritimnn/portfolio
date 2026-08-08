function Hero() {
  return (
    <>
      <section id="hero">
        <div className="first-child sda">
          <div className="img-container">
            <img src="./myimages/profile.webp" alt="" />
          </div>
          <h1 style={{ fontWeight: 700 }}>Dhritiman Kashyap</h1>
        </div>

        <div className="second-child sda">
          <p id="_113">Student at ARBA</p>
          <p>Web Dev and Microcontroller enthusiast</p>
          <p id="_256">
            Scroll Down
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="14"
            >
              <path d="M12 18L4 8h16l-8 10z" fill="currentColor" />
            </svg>
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
