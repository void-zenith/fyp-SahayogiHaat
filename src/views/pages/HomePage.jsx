import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "../HomePageComponent/Category";
import Herosection from "../HomePageComponent/Herosection";
import Makeachange from "../HomePageComponent/Makeachange";
import Stepstostart from "../HomePageComponent/Stepstostart";
import Topfundraiser from "../HomePageComponent/Topfundraiser";
import { ToastContainer, toast } from "react-toastify";
import { setDisplayLoginToast } from "../../features/auth/authSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const isDisplayed = useSelector((state) => state.auth.isToastDisplayed);
  console.log(isDisplayed);
  useEffect(() => {
    if (!isDisplayed) {
      toast.success("Login Successful", { autoClose: 2000 });
    }
    setTimeout(() => {
      dispatch(setDisplayLoginToast());
    }, 2000);
  });
  return (
    <div className="mainHomePage">
      <Herosection></Herosection>
      <Makeachange></Makeachange>
      <Stepstostart></Stepstostart>
      <Topfundraiser></Topfundraiser>
      <Category></Category>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default HomePage;
