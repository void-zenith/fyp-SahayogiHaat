import React from "react";
import Buttons from "../Components/Buttons";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { showDefaultFooter } from "../../features/footerView/footSlice";
import Heroimage from "../../Assets/Images/heroimage";
import PlayIcon from "../../Assets/Images/playicon";
const Herosection = () => {
  const dispatch = useDispatch();
  const goToStartFundraiser = () => {
    dispatch(showDefaultFooter());
  };
  return (
    <div className="herosection-container">
      <div className="herosection-container__left">
        <div className="leftcontainer-words">
          <div className="catchphraseword">
            <h1>Sahayogi Haat | Helping Hands</h1>
          </div>
          <div className="subcatchphraseword">
            <h4>Let us join our hands too build a better future.</h4>
            <h4>Spread hands to spread happiness.</h4>
          </div>
        </div>
        <div className="donation-status">
          <div className="totaldonated-container donation-container">
            <div className="text-container">Total Donated:</div>
            <div className="total-container">$ 32500</div>
          </div>
          <div className="totalfundraiser-container donation-container">
            <div className="text-container">Total Fundraiser:</div>
            <div className="total-container">$ 32500</div>
          </div>
          <div className="totalsuccessful-container donation-container">
            <div className="text-container">Total Successful Fundraisers:</div>
            <div className="total-container">2452500</div>
          </div>
        </div>
        <div className="startafundraiser-container">
          <Link to="/startfundraiser" className="link">
            <Buttons
              size="large"
              type="curved"
              label="Start a Fundraiser"
              variant="primary"
              onClick={goToStartFundraiser}
            ></Buttons>
          </Link>

          <div className="divider"></div>
          <div className="play">
            <PlayIcon></PlayIcon>
            <p>See how SahayogiHaat works</p>
          </div>
        </div>
      </div>

      <div className="herosection-container__right">
        <Heroimage></Heroimage>
      </div>
    </div>
  );
};

export default Herosection;
