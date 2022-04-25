import React from "react";
import Category from "../HomePageComponent/Category";
import Herosection from "../HomePageComponent/Herosection";
import Makeachange from "../HomePageComponent/Makeachange";
import Stepstostart from "../HomePageComponent/Stepstostart";
import Topfundraiser from "../HomePageComponent/Topfundraiser";

const HomePage = () => {
  return (
    <div className="mainHomePage">
      <Herosection></Herosection>
      <Makeachange></Makeachange>
      <Stepstostart></Stepstostart>
      <Topfundraiser></Topfundraiser>
      <Category></Category>
    </div>
  );
};

export default HomePage;
