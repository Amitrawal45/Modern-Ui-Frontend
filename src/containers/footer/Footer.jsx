import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to strp in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Designed and Created by Amit Rawal@2024,All Right Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counter</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & condition</p>
          <p>Privacy Policy</p>        
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>@Ammit45</p>
          <p>9812624078</p>
          <p>arawal@gmail.com</p>        
          
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2024 GPT-3. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
