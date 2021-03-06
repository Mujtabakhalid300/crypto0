import React, { useState } from "react";
import "./aboutme.css";

function Aboutme() {
  const [btn, setBtn] = useState(false);

  return (
    <div>
      <div className="navbar">
        <a href="/home" className="links">
          HOME
        </a>
        <a href="#about" className="links">
          ABOUT
        </a>
        <a href="#what" className="links">
          WHAT
        </a>
        <a href="#why" className="links">
          WHY
        </a>
      </div>
      <div className="wrapper">
        <div className="what section" id="what">
          <h3 className="question">what is the purpose of this website?</h3>
          <p>To give you regular price update for different crypto coins</p>
          <a href="/home">check prices</a>
        </div>
        <div className="why section" id="why">
          <h3 className="question">why did I make this website?</h3>
          <p className="answer">
            This is just a practice website. i am trying to learn node and other
            frameworks so yeah. here you go. just to feel better myself that i
            can still build websites with modern shitty designs.
          </p>
        </div>
        <div className="about" id="about">
          <h3 className="question">About me</h3>
          <p className="answer">
            I am a computer science student trying to learn web development. i
            have some great ideas, just don't know how to implement them. if you
            are good at react, email me.
          </p>
          <button
            id="btnbtn"
            onClick={() => {
              setBtn(!btn);
            }}
          >
            click me
          </button>
          {btn ? (
            <h3 className="email" id="email">
              mujtabakhalid20@gmail.com
            </h3>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="footer">all rights reserved.</div>
    </div>
  );
}

export default Aboutme;
