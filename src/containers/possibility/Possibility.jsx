import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos
          nisi vero, omnis ad in tenetur! Officia ea consectetur reiciendis
          modi, fuga enim eius aliquam illo incidunt laborum maxime iusto.
        </p>
        <h4>Request Early Access to Get Started </h4>
      </div>
    </div>
  );
};

export default Possibility;
