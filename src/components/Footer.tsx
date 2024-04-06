import React from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer-top">
        <span className="logo">Bandage</span>

        <div className="footer-top-links">
          <Image
            height="24"
            width="24"
            alt="phone"
            className=""
            unoptimized
            src={"/assets/instagram-blue.png"}
          />
          <Image
            height="24"
            width="24"
            alt="phone"
            unoptimized
            className="ms-3"
            src={"/assets/facebook-blue.png"}
          />
          <Image
            height="24"
            width="24"
            alt="phone"
            className="ms-3"
            unoptimized
            src={"/assets/twitter-blue.png"}
          />
        </div>
      </div>
      <div className="footer-mid">
        <div className="footer-link-main">
          <span className="footer-heading">Company Info</span>

          <div className="footer-links-div">
            <span className="footer-link">About Us</span>
            <span className="footer-link">Carrier</span>
            <span className="footer-link">We are hiring</span>
            <span className="footer-link">Blog</span>
          </div>
        </div>
        <div className="footer-link-main">
          <span className="footer-heading">Legal</span>

          <div className="footer-links-div">
            <span className="footer-link">About Us</span>
            <span className="footer-link">Carrier</span>
            <span className="footer-link">We are hiring</span>
            <span className="footer-link">Blog</span>
          </div>
        </div>
        <div className="footer-link-main">
          <span className="footer-heading">Features</span>

          <div className="footer-links-div">
            <span className="footer-link">Business Marketing</span>
            <span className="footer-link">User Analytic</span>
            <span className="footer-link">Live Chat</span>
            <span className="footer-link">Unlimited Support</span>
          </div>
        </div>
        <div className="footer-link-main">
          <span className="footer-heading">Resources</span>

          <div className="footer-links-div">
            <span className="footer-link">IOS & Android</span>
            <span className="footer-link">Watch a Demo</span>
            <span className="footer-link">Customers</span>
            <span className="footer-link">API</span>
          </div>
        </div>
        <div className="footer-link-main">
          <span className="footer-heading">Get In Touch</span>

          <div className="d-flex" style={{ marginTop: "20px" }}>
            <TextField
              style={{ background: "#F9F9F9" }}
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
            />
            <Button
              style={{
                background: "#23A6F0",
                borderRadius: "0px, 5px, 5px, 0px",
              }}
              variant="contained"
              size="large"
            >
              Subscribe
            </Button>
          </div>
          <span className="mail-txt">Lore imp sum dolor Amit</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-bottom-txt">
          Made With Love By Finland All Right Reserved{" "}
        </span>
      </div>
    </div>
  );
};

export default Footer;
