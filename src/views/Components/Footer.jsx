import React from "react";
import mainlogo from "../../Assets/Images/SahayogiHaat-logo.png";
import { Link } from "react-router-dom";
import Map from "./Map";
import facebook from "../../Assets/Images/facebook-link.png";
import linkedin from "../../Assets/Images/linkedin-link.png";
import youtube from "../../Assets/Images/youtube-link.png";
import gmail from "../../Assets/Images/gmail-link.png";
import instagram from "../../Assets/Images/instagram-link.png";
import Button from "./Buttons";
import allCategory from "../../Browsefundraiserroutes";
const Footer = ({ type }) => {
  let footerUrl = "defaultView";
  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/register" ||
    type === "shortfooter"
  ) {
    footerUrl = "shortfooter";
  }

  const allSocialLinks = [
    {
      title: "instagram",
      source: instagram,
    },
    {
      title: "facebook",
      source: facebook,
    },
    {
      title: "linkedin",
      source: linkedin,
    },
    {
      title: "youtube",
      source: youtube,
    },
    {
      title: "gmail",
      source: gmail,
    },
  ];
  const shortFooter = () => {
    return (
      <div className="shortfooter-container">
        <div className="copyrighttext-container">
          <p>&#169; 2021 SahayogiHaat. All rights reserved.</p>
        </div>
        <div className="logo-container">
          <img src={mainlogo} alt="logo" className="logo"></img>
        </div>
      </div>
    );
  };
  const defaultFooter = () => {
    return (
      <>
        <div className="footer-container">
          <div className="footer-container__left">
            <div className="links-container">
              <div className="shayogihaat-link link-container">
                <h2 className="each-links-heading">Sahayogi Haat</h2>
                <ul>
                  <li>
                    <Link to="/aboutus" className="link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" className="link">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/howitworks" className="link">
                      How it works?
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="donatetowards-link link-container">
                <h2 className="each-links-heading">Donate Towards</h2>
                <ul>
                  {allCategory.map((link, id) => (
                    <li key={id}>
                      <Link to={link.link} className="link">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="support-link link-container">
                <h2 className="each-links-heading">Support</h2>
                <ul>
                  <li>
                    <Link to="/faqs" className="link">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/helpandsupport" className="link">
                      Help &amp; Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="buttons-container">
              <Link to="/startfundraiser" className="link">
                {" "}
                <Button
                  label="Start a Fundraiser"
                  size="medium"
                  variant="curved"
                  type="primary"
                ></Button>
              </Link>
              <Link to="/registerasngo" className="link">
                <Button
                  label="Register as NGO"
                  size="medium"
                  variant="curved"
                  type="secondary"
                ></Button>
              </Link>
              <Link to="/register" className="link">
                <Button
                  label="Register as User"
                  size="medium"
                  variant="curved"
                  type="secondary"
                ></Button>
              </Link>
            </div>
          </div>

          <div className="footer-container__right">
            <div className="map-container">
              <Map></Map>
            </div>
            <div className="sociallinks-container">
              {allSocialLinks.map((social, id) => (
                <a href="#social" key={id}>
                  <img src={social.source} alt={social.title} width="30"></img>
                </a>
              ))}
            </div>
          </div>
        </div>
        {shortFooter()}
      </>
    );
  };
  if (footerUrl === "defaultView") {
    return defaultFooter();
  }
  if (footerUrl === "shortfooter") {
    return shortFooter();
  }
};

export default Footer;
