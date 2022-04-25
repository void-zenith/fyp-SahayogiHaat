import React from "react";
import Start from "../../Assets/Images/step-start.png";
import Share from "../../Assets/Images/step-share.png";
import Donate from "../../Assets/Images/step-donate.png";
import StepArrow from "../../Assets/Images/step-arrow";
const Stepstostart = () => {
  return (
    <div className="stepstostart-container">
      <div className="header-container">
        <h1 className="header-text">Steps to Start a fundraiser</h1>
      </div>
      <div className="steps-container">
        <div className="start-step-container all-step">
          <div className="circle-container">
            <div className="image">
              <img src={Start} alt="step-start"></img>
            </div>
          </div>
          <div className="step-text">
            <div className="step-title">
              <p>Start your fundraiser</p>
            </div>
            <div className="step-description">
              <p>
                This will only take few minutes. We only need a few details
                about the fundraiser of the user or NGO.
              </p>
            </div>
          </div>
        </div>
        <div className="arrow">
          <StepArrow></StepArrow>
        </div>
        <div className="share-step-container all-step">
          <div className="circle-container">
            <div className="image">
              <img src={Share} alt="step-share"></img>
            </div>
          </div>
          <div className="step-text">
            <div className="step-title">
              <p>Share your fundraiser</p>
            </div>
            <div className="step-description">
              <p>Share with your friends and family in no time.</p>
            </div>
          </div>
        </div>
        <div className="arrow">
          <StepArrow></StepArrow>
        </div>
        <div className="get-step-container all-step">
          <div className="circle-container">
            <div className="image">
              <img src={Donate} alt="step-donate"></img>
            </div>
          </div>
          <div className="step-text">
            <div className="step-title">
              <p>Get the Donation</p>
            </div>
            <div className="step-description">
              <p>The funds will be sent directly to your account.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepstostart;
