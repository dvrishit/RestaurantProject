import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            laudantium iste, cumque dolorum aspernatur, sequi unde quasi
            incidunt officia nam at? Laborum est incidunt sed delectus nemo
            distinctio esse ut provident, possimus, in aliquam vitae velit,
            excepturi ipsa labore? Adipisci culpa delectus quisquam ipsam rerum
            numquam quam ab mollitia similique?
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
