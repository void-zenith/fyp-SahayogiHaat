import React from "react";
import registerasngo from "../../Assets/Images/registerasngo.jpg";
import browsefundraiser from "../../Assets/Images/givedonation.jpg";
import registerasuser from "../../Assets/Images/registerasuser.jpg";
import { Link } from "react-router-dom";

const Makeachange = () => {
  return (
    <div className="makeachange">
      <div className="header-container">
        <h1 className="header-text">Make a change</h1>
      </div>
      <div className="changes-container">
        <Link className="link" to="/browsefundraiser">
          <div className="browseevent-container change-container">
            <img
              src={browsefundraiser}
              className="change-image"
              alt="Browse fundraiser"
            ></img>
            <div className="overlay">
              <p className="overlay-text">Browse Fundraiser</p>
            </div>
          </div>
        </Link>
        <Link className="link" to="/registerasngo">
          <div className="registerasngo-container change-container">
            <img
              src={registerasngo}
              className="change-image"
              alt="Browse fundraiser"
            ></img>
            <div className="overlay">
              <p className="overlay-text">Register as NGO</p>
            </div>
          </div>
        </Link>
        <Link className="link" to="/register">
          <div className="registerasuser-container change-container">
            <img
              src={registerasuser}
              className="change-image"
              alt="Browse fundraiser"
            ></img>
            <div className="overlay">
              <p className="overlay-text">Register as User</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Makeachange;
