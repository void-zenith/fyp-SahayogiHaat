import React from "react";
import { Link } from "react-router-dom";
import Fundraiser from "../Components/Fundraiser";
import Mockdata from "../HomePageComponent/Mockdata";
const Topfundraiser = () => {
  return (
    <div className="topfundraiser-container">
      <div className="topfundraiser-title">Top fundraisers</div>
      <div className="viewtopfundraiser">View the top fundraiser</div>
      <div className="topfundraisers">
        {Mockdata.map((data, id) => (
          <Fundraiser data={data} key={id}></Fundraiser>
        ))}
      </div>
      <div className="readmore">
        <Link to="/browsefundraiser" className="link readmorelink">
          View More
        </Link>
      </div>
    </div>
  );
};

export default Topfundraiser;
