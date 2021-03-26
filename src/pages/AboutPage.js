import React from "react";
import About from "../components/About/About";
import Social from "../components/Social/Social";
import Nav from "../components/Nav/Nav";

const AboutPage = () => {
  return (
    <div>
      <Nav />
      <About />
      <footer>
        <Social />
      </footer>
    </div>
  );
};

export default AboutPage;
