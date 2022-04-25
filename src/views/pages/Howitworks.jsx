import React from "react";
import Stepstostart from "../HomePageComponent/Stepstostart";
import Button from "../Components/Buttons";
import { Link } from "react-router-dom";

const Howitworks = () => {
  return (
    <div className="howitworks-container">
      <div className="howitworks-container__header">
        <h1 className="howitworks-header">How SahayogiHaat Works?</h1>
      </div>
      <div className="howitworks-container__content">
        <div className="howitworks-content__description">
          <p className="sahayogihaat-description">
            “SahayogiHaat” translated from Nepali to English refers to “Helping
            Hand”. As the name suggests helping each other, providing
            assistance, and leading the way for better future. This is what we
            should be promoting. This social fundraising website is not only
            about raising money and solving problems through money. It is also
            about standing along with the poor, socially affected, medically
            disabled and diseased people and giving them confidence, and hope
            that they can live to breathe another day. This website also helps
            NGO to get further help from the crowds and to broaden their reach.
          </p>
        </div>
        <div className="howitworks-content__youtube">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/X0fNLxAIZsM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="howitworks-content__steps">
          <Stepstostart></Stepstostart>
        </div>
        <div className="howitworks-content__buttons">
          <Link to="/startfundraiser" className="link">
            <Button
              label="Start a Fundraiser"
              variant="primary"
              type="rectangle"
              size="medium"
            ></Button>
          </Link>
          <Link to="/browsefundraiser" className="link">
            <Button
              label="Browse a Fundraiser"
              variant="primary"
              type="rectangle"
              size="medium"
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
