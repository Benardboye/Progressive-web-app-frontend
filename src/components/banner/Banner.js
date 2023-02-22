import React from "react";
import "./banner.scss";
import { images } from "../../images";

// Define the Banner component
const Banner = () => {
  // Set up any state variables with the useState hook here (none used in this component)

  // Render the component
  return (
    <div className="">
      <div className="banner container">
        {/* Use the HTML picture element to display images based on media queries */}
        <picture>
          {/* Use the works_mobile image for screens narrower than 768px */}
          <source media="(max-width:767px )" srcSet={images.works_mobile} />
          {/* Use the works_desktop image for screens 768px and wider */}
          <img src={images.works_desktop} alt="" />
        </picture>
        <div className="banner__wrapper">
          {/* Display the title of the banner */}
          <div className="title">
            <h2 className="title1">
              Find Out More <br /> About How We Work
            </h2>
          </div>
          {/* Display a button for the user to click */}
          <div className="button">
            <button className="btn">How we work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Banner component as the default export
export default Banner;