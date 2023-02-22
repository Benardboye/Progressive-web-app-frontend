import React from 'react';
import './hero.scss';
import { images } from '../../images';
const Hero = () => {

  return (
    <div className="hero">
      <div className="right-top-image">
        <picture>
          <source
            media="(max-width:767px)"
            srcSet={images.intro_right_mobile}
          />
          <img src={images.intro_right} alt="" />
        </picture>
      </div>
      <div className="hero__wrapper container">
        <div className="hero__content">
          <h1 className="title1">
            Sport Is Everything, Join the Movement Today!
          </h1>
          <p className="hero__text">
            Welcome to the ultimate destination for sports enthusiasts. At Sport
            Is Everything, we believe that sports have the power to transform
            lives, bringing people together and fostering physical, mental, and
            emotional well-being.
          </p>
        </div>
        <div className="hero__image">
          <picture>
            <source media="(max-width:991px)" srcSet={images.intro_desktop} />
            <img src={images.intro_desktop} alt="" />
          </picture>
        </div>
      </div>
      <div className="left-bottom-image">
        <picture>
          <source media="(max-width:767px)" srcSet={images.intro_left_mobile} />
          <img src={images.intro_left} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
