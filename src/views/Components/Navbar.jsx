import React, { useState } from "react";
import mainlogo from "../../Assets/Images/SahayogiHaat-logo.png";
import Buttons from "./Buttons";
import search from "../../Assets/Images/search.png";
import close from "../../Assets/Images/close.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSearchBar, showNavBar } from "../../features/navbarView/viewSlice";
import {
  showShortFooter,
  showDefaultFooter,
} from "../../features/footerView/footSlice";
import profileuser from "../../Assets/Images/profileuser.png";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Navbar = ({ navbarview }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const setInput = (e) => {
    setSearchInput(e.target.value);
  };

  const goToSearchBar = () => {
    dispatch(showSearchBar());
  };
  const getAllToDefault = () => {
    setSearchInput("");
    dispatch(showNavBar());
    dispatch(showDefaultFooter());
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const showShortFooters = () => {
    dispatch(showShortFooter());
  };
  const DefaultNavbar = () => {
    return (
      <nav className="navbar-container">
        <div className="navbar-container__left">
          <div
            className="navbar-container__left-logo"
            onClick={getAllToDefault}
          >
            <Link to="/">
              <img src={mainlogo} alt="logo" className="logo"></img>
            </Link>
          </div>
          <div
            className="navbar-container__left-search"
            onClick={goToSearchBar}
          >
            <img src={search} alt="logo" className="searchlogo"></img>
            <p>Search</p>
          </div>

          <div className="navbar-container__left-beasahayogi">
            <Link to="/browsefundraiser" className="link">
              <Buttons
                type="curved"
                label="Be a Sahayogi"
                variant="primary"
                size="large"
                onClick={getAllToDefault}
              ></Buttons>
            </Link>
          </div>
        </div>
        <div className="navbar-container__right">
          <div className="navbar-container__right-startfund">
            <Link to="/startfundraiser" className="link">
              <Buttons
                size="large"
                type="curved"
                label="Start a Fundraiser"
                variant="outlined-primary"
                onClick={getAllToDefault}
              ></Buttons>
            </Link>
          </div>
          <div
            className="navbar-container__right-howitworks"
            onClick={getAllToDefault}
          >
            <Link to="/howitworks" className="link">
              How it Works?
            </Link>
          </div>
          {/* <div
            className="navbar-container__right-login"
            onClick={showShortFooters}
          >
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
          <div
            className="navbar-container__right-register"
            onClick={showShortFooters}
          >
            <Link to="/register" className="link">
              Register
            </Link>
          </div> */}
          <div className="navbar-container__right-profile">
            <img
              src={profileuser}
              aria-describedby={id}
              onClick={handleClick}
              alt="profile"
              width="30"
              height="30"
            ></img>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>View Profile</Typography>
              <Typography sx={{ p: 2 }}>Logout</Typography>
            </Popover>
          </div>
        </div>
      </nav>
    );
  };
  const SearchNavbar = () => {
    return (
      <nav className="searchnavbar-container">
        <div className="searchnavbar-container__logo" onClick={getAllToDefault}>
          <Link to="/">
            <img src={mainlogo} alt="logo" className="logo"></img>
          </Link>
        </div>
        <div className="searchnavbar-container__search">
          <img src={search} alt="logo" className="searchlogo"></img>
          <div className="textfield-container ">
            <input
              id="searchTextField"
              type="text"
              value={searchInput}
              onChange={(e) => setInput(e)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  navigate(
                    `/browsefundraiser/search?fundraisername=${searchInput}`
                  );
                }
              }}
              className="searchTextfield"
              placeholder="Search for a fundraiser"
            ></input>
          </div>
        </div>
        <div
          className="searchnavbar-container__close"
          onClick={getAllToDefault}
        >
          <img src={close} alt="logo" className="closelogo"></img>
        </div>
      </nav>
    );
  };
  if (navbarview === "gotosearch") {
    return SearchNavbar();
  }
  if (navbarview === "gotodefault") {
    return DefaultNavbar();
  }
};

export default Navbar;
