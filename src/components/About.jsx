function About() {
  return (
    <>
      <section id="about">
        <h1>About Me</h1>
        <img src="./myimages/bannerimg2.webp" alt="" />
        <p id="aboutcontent" className="sda">
          &emsp; &emsp; Hi, I'm
          <b style={{ fontSize: "1.1rem" }}> Dhritiman Kashyap</b>. I'm a
          17-year-old student and full-stack developer based in India, currently
          studying in Class 11 at &nbsp;
          <a
            href="https://share.google/M5wtIe5FEmluiKVwn"
            style={{ color: "#252627" }}
          >
            Anundoram Borooah Academy,
          </a>{" "}
          Pathsala.
          <br />
          <br />
          &emsp; &emsp; My journey into code started back in 2019 during the
          lockdown, and what began as curiosity quickly turned into a deep
          passion for building on the web. Over the last several years, I’ve
          been teaching myself modern web development, turning my ideas into
          functional apps, such as, A Habit Tracker.. or the Study Tracker App I
          made for my 10th grade final exams.
        </p>
      </section>
      <div className="lb"></div>
    </>
  );
}
export default About;
