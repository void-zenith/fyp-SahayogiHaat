import React, { useState } from "react";
import InputField from "../Components/InputField";
import user from "../../Assets/Images/user.png";
import error from "../../Assets/Images/error.png";
import email from "../../Assets/Images/email.png";
import ages from "../../Assets/Images/age.png";
import address from "../../Assets/Images/address.png";
import gender from "../../Assets/Images/gender.png";
import location from "../../Assets/Images/location.png";

import Slider from "@mui/material/Slider";
import SelectField from "../Components/Select";
import Button from "../Components/Buttons";
import CheckboxField from "../Components/CheckboxField";
import { Link } from "react-router-dom";
const Register = () => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [imageUrl, setImageUrl] = useState("");
  const hanldeLogoChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="register-container">
      <div className="register-container__content">
        <div className="register-container__content-header">
          <p className="signup-header">Sign Up</p>
          <p className="signup-subheader">
            Please fill in this form to create an account
          </p>
        </div>
        <div className="register-container__content-body">
          <div className="register-logocontainer">
            <div className="userlogo-container">
              {imageUrl ? (
                <img src={imageUrl} alt={imageUrl} />
              ) : (
                <>
                  <p>Please</p>
                  <p>enter your logo</p>
                </>
              )}
            </div>
            <label>
              <input
                type="file"
                accept="image/*"
                name="myImage"
                onChange={hanldeLogoChange}
              />
              Select Image
            </label>
          </div>
          <div className="register-namecontainer eachregister-field">
            <img src={user} alt="user" className="register-icon"></img>
            <InputField
              placeholder="Full Name"
              type="text"
              size="small"
            ></InputField>
            <InputField
              placeholder="Last Name"
              type="text"
              size="small"
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-emailcontainer eachregister-field">
            <img src={email} alt="Email" className="register-icon"></img>
            <InputField
              placeholder="Last Name"
              type="text"
              size="large"
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-age-gendercontainer eachregister-field">
            <div className="age-container">
              <img src={ages} alt="age" className="register-icon"></img>
              <Slider
                sx={{ color: "#f3f3f3", margin: "15px" }}
                aria-label="small"
                size="small"
                valueLabelDisplay="on"
                value={value}
                onChange={handleChange}
              />
            </div>
            <div className="gender-container">
              <img src={gender} alt="gender" className="register-icon"></img>
              <SelectField label="Age" width="75%"></SelectField>
            </div>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-district-provincecontainer eachregister-field">
            <div className="district-container">
              <img src={address} alt="address" className="register-icon"></img>
              <SelectField label="Province" width="75%"></SelectField>
            </div>
            <div className="province-container">
              <SelectField label="District" width="75%"></SelectField>
            </div>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-addresscontainer eachregister-field">
            <img src={location} alt="Location" className="register-icon"></img>
            <InputField
              placeholder="Address"
              type="text"
              size="large"
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-emailcontainer eachregister-field">
            <img src={email} alt="Email" className="register-icon"></img>
            <InputField
              placeholder="Email"
              type="text"
              size="large"
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-privacypolicy eachregister-field">
            <CheckboxField label="By confirming you agree to the privacy policy of SahayogiHaat and accept them hereby."></CheckboxField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-termsandcontition eachregister-field">
            <CheckboxField label="By confirming you agree to the Terms and Condition of SahayogiHaat and accept them hereby."></CheckboxField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
        </div>
        <div className="register-container__content-footer">
          <Button
            size="large-60"
            type="rectangle"
            label="Sign up"
            variant="outlined-primary-rectangle"
          ></Button>
        </div>
      </div>
      <div className="register-container__footer">
        <p className="registerasngo">Wanna Register as NGO? </p>
        &nbsp; &nbsp; &nbsp;
        <Link className="link" to="/registerasngo">
          <Button
            size="small-60"
            type="rectangle"
            label="Click Me"
            variant="outlined-primary-rectangle"
          ></Button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
