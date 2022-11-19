import React from "react";
import { contact } from "../data/dummydata";
import Heading from "../common/Heading";
export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Hi there" />
          <div className="content flexsb">
            <div className="right">
              <form>
                <div className="flex">
                  <input type="text" placeholder="Name" data-aos="flip-left" />
                  <input
                    type="text"
                    placeholder="Email"
                    data-aos="flip-right"
                  />
                </div>
                <input type="email" placeholder="Subject" data-aos="flip-up" />
                <textarea
                  name=" "
                  id=" "
                  cols="40"
                  rows="10"
                  data-aos="flip-down"
                ></textarea>
                <button data-aos="zoom-in">Submit</button>
              </form>
            </div>
            <div className="left">
              {contact.map((itme)=>(
                <div className="box" data-aos='zoom-in'>
                  <i>  {itme.icon} </i>
                  <p>  {itme.text1} </p>
                  <p>  {itme.text2} </p>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


