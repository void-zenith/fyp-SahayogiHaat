import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "../Components/InputField";
import Button from "../Components/Buttons";
import CheckboxField from "../Components/CheckboxField";
import UserIcon from "../../Assets/Images/user.png";
import PasswordIcon from "../../Assets/Images/password.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import loginbg from "../../Assets/Images/login-bg.png";
import { login } from "../../features/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logindetails, setlogindetails] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    const email = logindetails.email;
    const password = logindetails.password;
    console.log(email, password);
    await dispatch(login({ email, password }))
      .then(unwrapResult)
      .then((res) => {
        if (res.status === 200) {
          toast("Success", { autoClose: 150000 });
          navigate("/");
        }
      });
  };
  return (
    <div className="mainlogin-container">
      <div className="mainlogin-container__left">
        <div className="login-container">
          <h3 className="signintext">Sign In</h3>
          <div className="login-container__username">
            <img src={UserIcon} alt="userlogo" className="userlogo"></img>
            <div className="usertext-container">
              <InputField
                placeholder="Email"
                size="medium"
                onChange={(e) =>
                  setlogindetails({ ...logindetails, email: e.target.value })
                }
              ></InputField>
            </div>
          </div>
          <div className="login-container__password">
            <img
              src={PasswordIcon}
              alt="passwordlogo"
              className="passwordlogo"
            ></img>
            <div className="passwordtext-container">
              <InputField
                placeholder="Password"
                type="password"
                size="medium"
                onChange={(e) =>
                  setlogindetails({ ...logindetails, password: e.target.value })
                }
              ></InputField>
            </div>
          </div>
          <div className="login-container__remember">
            <CheckboxField label="Remember Me"></CheckboxField>
          </div>
          <div className="login-container__singinbtn">
            <Button
              size="small-60"
              type="rectangle"
              label="Sign in"
              variant="primary-rectangle"
              onClick={handleLogin}
            ></Button>
          </div>
        </div>
        <div className="signup-container">
          <p>New to SahayogiHaat?</p>
          <div className="signup-btn">
            <Link className="link" to="/register">
              <Button
                size="small-60"
                type="rectangle"
                label="Sign up"
                variant="outlined-primary-rectangle"
              ></Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mainlogin-container__right">
        <div className="img-container">
          <img src={loginbg} alt="login background"></img>
          <div className="overlay">
            <div className="overlay-text">
              <h2>Sahayogi Haat | Helping Hands</h2>
              <div className="overlay-text__subtitle">
                <h4>Let us join our hands too build a better future.</h4>
                <h4>Spread hands to spread happiness.</h4>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
