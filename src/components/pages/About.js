import React from "react";
import { about } from "../data/dummydata";
import Heading from "../common/Heading";

const About = () => {
  return (
    <>
      <section className="about">
        {about.map((val) => (
          // first i removed the main container for the content of this page
          <>
            <div className="left" data-aos="fade-down-right">
              <img src={val.cover} />
            </div>
          {/* wrapped the content:right element here in new container:about content*/}
            <div className="right" data-aos="fade-down-left">
              <div className="about-content">
                <Heading title="About Me" />
                <p> {val.desc} </p>
                <p> {val.desc1} </p>
                {/* removed the 2nd button  */}
                {/* <button> Download CV</button> */}
                <button className="primaryBtn">Download CV</button>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default About;
