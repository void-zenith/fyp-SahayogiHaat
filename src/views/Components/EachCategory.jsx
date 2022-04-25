import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const EachCategory = ({ catProps }) => {
  return (
    <Link to={catProps.link} className="link">
      <Card
        elevation={8}
        sx={{
          cursor: "pointer",
          width: 130,
          minWidth: 90,
          height: 143,
          padding: "10px",
          margin: "10px",
          background: "#89B0AE",
          textAlign: "center",
        }}
      >
        <img
          src={catProps.Component}
          height="80"
          width="80"
          alt={catProps.title}
        ></img>
        <Typography
          className={`category-text ${
            catProps.title.length <= 12 ? "category-text__margin" : ""
          }`}
        >
          {catProps.title}
        </Typography>
      </Card>
    </Link>
  );
};

export default EachCategory;
