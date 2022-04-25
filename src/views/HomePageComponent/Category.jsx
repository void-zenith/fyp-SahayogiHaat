import { Box } from "@mui/material";
import React from "react";
import EachCategory from "../Components/EachCategory";
import allCategory from "../../Browsefundraiserroutes";
const Category = () => {
  return (
    <div className="category-container">
      <div className="categories-header">
        <div className="categories-header__title">Category</div>
        <div className="categories-header__subtitle">
          Causes you can donate to
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          minWidth: "35%",
          width: "75%",
        }}
      >
        {allCategory.map((category, id) => (
          <EachCategory catProps={category} key={id}></EachCategory>
        ))}
      </Box>
    </div>
  );
};

export default Category;
