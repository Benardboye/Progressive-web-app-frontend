import React, { useEffect } from "react";
import gsap from "gsap";
import { Expo } from "gsap";
import { images } from '../../images';
import "./landingPage.scss"


function LandingPage() {
  useEffect(() => {
    gsap.to(".title-1", {
      duration: 2,
      x: 30,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    gsap.to(".title-2", {
      duration: 2,
      delay: 0.2,
      x: -80,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    gsap.from(".runner", {
      duration: 2,
      delay: 1.6,
      x: -80,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    gsap.from(".box-1", {
      duration: 4,
      delay: 1,
      rotation: 200,
      transformOrigin: "50% 50%",
      opacity: 1,
      x: -180,
      ease: Expo.easeInOut,
    });

    gsap.from(".box-2", {
      duration: 4,
      delay: 1.2,
      rotation: 90,
      transformOrigin: "50% 50%",
      opacity: 1,
      x: -180,
      ease: Expo.easeInOut,
    });

    gsap.from(".box-3", {
      duration: 4,
      delay: 1,
      rotation: 55,
      transformOrigin: "50% 50%",
      opacity: 1,
      x: -180,
      ease: Expo.easeInOut,
    });

    gsap.to(".pattern", {
      duration: 2,
      delay: 0.8,
      width: 0,
      opacity: 1,
      ease: Expo.easeInOut,
    });


    gsap.from(".content p", {
      duration: 2,
      delay: 2.4,
      y: 20,
      opacity: 1,
      ease: Expo.easeInOut,
    });

  }, []);

  return (
    <div className="wrapper">
      <div className="pattern"></div>

      <div className="nav">
        {/* <div className="lp-logo"><ion-icon name="infinite"></ion-icon></div> */}

    
      </div>

      <div className="box-1 box"></div>
      <div className="box-2 box"></div>
      <div className="box-3 box"></div>

      <div className="title-2">Everything</div>

      <div className="runner">
        <img src={images.runner} alt="" />
      </div>

      <div className="title-1">Sport is</div>

      <div className="content">
        <p>
        Discover the power of sport and take your game to the next level. <br />
        Join the Movement Today!
        </p>

    
      </div>

    
    </div>
  );
}

export default LandingPage