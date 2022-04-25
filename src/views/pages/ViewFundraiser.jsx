import React from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "../Components/Buttons";
import user from "../../Assets/Images/blackuser.png";
import tags from "../../Assets/Images/tags.png";
import love from "../../Assets/Images/love.png";
import phone from "../../Assets/Images/phone.png";
import email from "../../Assets/Images/email.png";
import StyledTabs from "../Components/StyledTabs";

const ViewFundraiser = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  function Item(props) {
    return (
      <div style={{ background: "red", height: "350px", borderRadius: "12px" }}>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
      </div>
    );
  }
  return (
    <div className="viewfundraiser-container">
      <div className="viewfundraiser-container__header">
        <h1>Fundraiser Title Fundraiser Title</h1>
      </div>
      <div className="viewfundraiser-container__body">
        <div className="viewfundraiser-body__left">
          <div className="viewfundraiser-left__carousel">
            <Carousel
              height={"350px"}
              navButtonsAlwaysVisible="true"
              swipe="true"
            >
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </div>
          <div className="viewfundraiser-left__organizer">
            <img src={user} alt="user" className="organizerlogo"></img>
            <p className="organizedby">
              Fundraiser Organized by:{" "}
              <span className="organizername">Zenith Rajbhandari</span>
            </p>
          </div>
        </div>
        <div className="viewfundraiser-body__right">
          <div className="fundraiser-options">
            <div className="money-raised">
              <p>
                <span className="money">Rs. 192</span>{" "}
                <span className="raisedoutof"> raised out of </span>
                <span className="money">Rs. 30023232</span>
              </p>
            </div>
            <Box sx={{ width: "100%" }}>
              <LinearProgress variant="determinate" value={20} />
            </Box>
            <div className="totaldonator">
              <p>187 Donators</p>
            </div>
            <div className="viewfundraiser-right__buttons">
              <Button
                label="Share"
                variant="primary"
                type="rectangle"
                size="medium-60"
              ></Button>
              <Button
                label="Donate Now"
                variant="primary"
                type="rectangle"
                size="medium-60"
              ></Button>
              <Button
                label="Like"
                variant="primary"
                type="rectangle"
                size="medium-60"
              ></Button>
              <Button
                label="Report this Fundraiser"
                variant="primary"
                type="rectangle"
                size="medium-60"
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="viewfundraiser-container__maincontent">
        <div className="viewfundraiser-maincontent__fundraiserdetails">
          <div className="viewfundraiser-datedetails">
            <p className="datecontainer">
              Expires On: <span className="datedetail">2021/12/12</span>
            </p>
          </div>
          <div className="viewfundraiser-category">
            <img src={tags} alt="tags" className="view-logo" />
            <p>Community Development</p>
          </div>
          <div className="viewfundraiser-likes">
            <img src={love} alt="likes" className="view-logo" />
            <p>1832</p>
          </div>
          <div className="viewfundraiser-contactorganizer">
            <p>Contact organizer:</p>
            <div className="phone-contanier contact-container">
              <img src={phone} alt="phones" className="view-logo" />
            </div>
            <div className="email-contanier contact-container">
              <img src={email} alt="emails" className="view-logo" />
            </div>
          </div>
        </div>
        <div className="viewfundraiser-maincontent__description">
          <p className="fundraiser-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            beatae, vel eos quo numquam repellendus ad soluta porro nemo
            aliquid! Minima possimus est tempora, dolores voluptas quisquam.
            Deserunt, perspiciatis officia? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Rerum quam dolore sit rem. Corporis
            consectetur deleniti maiores temporibus ipsa voluptas optio est
            pariatur, sequi ipsum dolorum nemo quisquam, magnam quos! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. A asperiores nam
            quaerat qui aspernatur dolores voluptates natus sunt, repellat
            excepturi, autem recusandae repellendus! Odio, deleniti quos
            voluptatem quo iste corporis.
          </p>
        </div>
        <div className="viewfundraiser-maincontent__updatescomments">
          <StyledTabs items={["Updates", "Comments"]}></StyledTabs>
        </div>
        <br />
        <div className="viewfundraiser-maincontent__updatescomments">
          <StyledTabs
            items={["Top Donators", "All Donators", "Donated By Organizations"]}
          ></StyledTabs>
        </div>
      </div>
    </div>
  );
};

export default ViewFundraiser;
