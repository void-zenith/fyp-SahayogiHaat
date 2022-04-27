import React, { useState } from "react";
import InputField from "../Components/InputField";
import user from "../../Assets/Images/user.png";
import error from "../../Assets/Images/error.png";
import email from "../../Assets/Images/email.png";
import ages from "../../Assets/Images/age.png";
import genderlogo from "../../Assets/Images/gender.png";
import avatar from "../../Assets/Images/avatar.jpg";

import location from "../../Assets/Images/location.png";
import password from "../../Assets/Images/password.png";
import phone from "../../Assets/Images/phone.png";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import SelectField from "../Components/Select";
import Button from "../Components/Buttons";
import { Link } from "react-router-dom";
import { register } from "../../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [imageUrl, setImageUrl] = useState(avatar);
  const [imgsrc, setImgsrc] = useState("");
  const hanldeLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setImgsrc(x.target.result);
        setImageUrl(imageFile);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImageUrl(avatar);
    }
  };

  const [checkboxIsChecked, setChecked] = useState({
    termsConditio: false,
    privacyPolicy: false,
  });
  const handlePPCheckbox = (e) => {
    setChecked({ ...checkboxIsChecked, privacyPolicy: e.target.checked });
  };
  const handleTCCheckbox = (e) => {
    setChecked({ ...checkboxIsChecked, termsConditio: e.target.checked });
  };

  const [registerDetails, setRegisterDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    gender: "",
    address: "",
    password: "",
    contactnumber: 0,
  });
  const [gender, setGender] = useState("");
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleSubmit = async () => {
    const registerformData = new FormData();
    registerformData.append(
      "UserName",
      registerDetails.firstName + registerDetails.lastName
    );
    registerformData.append("UserFirstname", registerDetails.firstName);
    registerformData.append("UserLastname", registerDetails.lastName);
    registerformData.append("UserEmail", registerDetails.email);
    registerformData.append("UserLogo", imageUrl);
    registerformData.append("UserType", "User");
    registerformData.append("Address", registerDetails.address);
    registerformData.append("ContactNo", registerDetails.contactnumber);
    registerformData.append("Password", registerDetails.password);
    registerformData.append("gender", gender);

    await dispatch(register({ registerformData }));
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
        <form
          onSubmit={handleSubmit}
          className="register-container__content-body"
        >
          <div className="register-logocontainer">
            <div className="userlogo-container">
              {imgsrc ? (
                <img src={imgsrc} alt={imgsrc} />
              ) : (
                <>
                  <p>Please</p>
                  <p>Select your logo</p>
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
              placeholder="First Name"
              type="text"
              size="small"
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  firstName: e.target.value,
                })
              }
            ></InputField>
            <InputField
              placeholder="Last Name"
              type="text"
              size="small"
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  lastName: e.target.value,
                })
              }
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-emailcontainer eachregister-field">
            <img src={email} alt="Email" className="register-icon"></img>
            <InputField
              placeholder="Email"
              type="text"
              size="large"
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  email: e.target.value,
                })
              }
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-namecontainer eachregister-field">
            <img src={password} alt="password" className="register-icon"></img>
            <InputField
              placeholder="Confirm Password"
              type="password"
              size="small"
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  password: e.target.value,
                })
              }
            ></InputField>
            <InputField
              placeholder="Re-Enter Password"
              type="password"
              size="small"
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  password: e.target.value,
                })
              }
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
              <img
                src={genderlogo}
                alt="gender"
                className="register-icon"
              ></img>
              <SelectField
                onChange={handleGenderChange}
                gender={gender}
                label="Gender"
                width="75%"
              ></SelectField>
            </div>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>

          <div className="register-addresscontainer eachregister-field">
            <img src={location} alt="Location" className="register-icon"></img>
            <InputField
              placeholder="Address"
              type="text"
              size="large"
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  address: e.target.value,
                })
              }
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-emailcontainer eachregister-field">
            <img src={phone} alt="phone" className="register-icon"></img>
            <InputField
              placeholder="Contact Number"
              type="text"
              size="large"
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  contactnumber: e.target.value,
                })
              }
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-privacypolicy eachregister-field">
            <FormControlLabel
              value="top"
              sx={{ color: "#faf9f9" }}
              control={
                <Checkbox
                  checked={checkboxIsChecked.privacyPolicy}
                  onChange={handlePPCheckbox}
                  sx={{
                    color: "#faf9f9",
                    margin: "0 15px",
                    "&.Mui-checked": {
                      color: "#faf9f9",
                    },
                  }}
                />
              }
              label="By confirming you agree to the privacy policy of SahayogiHaat and accept them hereby."
            />
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="register-termsandcontition eachregister-field">
            <FormControlLabel
              value="top"
              sx={{ color: "#faf9f9" }}
              control={
                <Checkbox
                  checked={checkboxIsChecked.termsConditio}
                  onChange={handleTCCheckbox}
                  sx={{
                    color: "#faf9f9",
                    margin: "0 15px",
                    "&.Mui-checked": {
                      color: "#faf9f9",
                    },
                  }}
                />
              }
              label="By confirming you agree to the Terms and Condition of SahayogiHaat and accept them hereby."
            />
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
        </form>
        <div className="register-container__content-footer">
          <Button
            size="large-60"
            type="rectangle"
            label="Sign up"
            variant="outlined-primary-rectangle"
            onClick={handleSubmit}
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
