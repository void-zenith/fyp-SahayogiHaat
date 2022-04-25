import React from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import allCategory from "../../Browsefundraiserroutes";
import { Link } from "react-router-dom";
import InputField from "../Components/InputField";
import Bfsearch from "../../Assets/Images/bf-search";
import Fundraiser from "../Components/Fundraiser";
import Button from "../Components/Buttons";
import Browsemock from "./Browsemock";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const BrowseFundraiser = () => {
  const { fundraiser } = useParams();
  let [search] = useSearchParams();
  console.log(search.get("fundraisername"));
  const convertToUpperCase = (text) => {
    let str = "";
    if (text.includes("_")) {
      str = text.replaceAll("_", " ");
      return str[0].toUpperCase() + str.slice(1);
    } else {
      return text[0].toUpperCase() + text.slice(1);
    }
  };
  return (
    <div className="browsefundraiser-container">
      <div className="browsefundraiser-container__header">
        <h1>
          Browse{" "}
          {fundraiser === undefined ? "All" : convertToUpperCase(fundraiser)}{" "}
          Fundraisers
        </h1>
      </div>
      <div className="browsefundraiser-container__content">
        <div className="bf-content__left">
          <div className="bf-categories-container">
            <div className="bf-categoires-title">
              <h3>Categories:</h3>
              <div className="underline"></div>
            </div>
            <div className="bf-categories-link">
              <ul>
                <li>
                  <Link
                    to="/browsefundraiser"
                    className={`link ${
                      fundraiser === undefined ? "active" : ""
                    }`}
                  >
                    All Categories
                  </Link>
                </li>
                {allCategory.map((link, id) => (
                  <li key={id}>
                    <Link
                      to={link.link}
                      className={`link ${
                        link.link.includes(fundraiser) ? "active" : ""
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bf-categories-startafundraiser">
              <Link to="/startfundraiser" className="link">
                <Button
                  label="Start a Fundraiser"
                  variant="primary"
                  type="rectangle"
                  size="medium"
                ></Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bf-content__right">
          <div className="searchBf-container">
            <InputField
              placeholder="Password"
              type="text"
              size="bf-large"
            ></InputField>
            <div className="search-icon">
              <Bfsearch></Bfsearch>
            </div>
          </div>
          <div className="all-fundraiser">
            {Browsemock.map((event, id) => (
              <Fundraiser data={event} key={id}></Fundraiser>
            ))}
          </div>
          <Stack spacing={2}>
            <Pagination count={10} />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default BrowseFundraiser;
