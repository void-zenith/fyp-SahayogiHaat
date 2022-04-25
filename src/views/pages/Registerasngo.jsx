import React, { useState } from "react";
import InputField from "../Components/InputField";
import user from "../../Assets/Images/user.png";
import error from "../../Assets/Images/error.png";
import address from "../../Assets/Images/address.png";
import email from "../../Assets/Images/email.png";
import phone from "../../Assets/Images/phone.png";
import document from "../../Assets/Images/document.png";

import RadioGroupField from "../Components/RadioGroup";
import organization from "../../Assets/Images/organization.png";
import CheckboxField from "../Components/CheckboxField";
import Button from "../Components/Buttons";
const Registerasngo = () => {
  const [imageUrl, setImageUrl] = useState({
    registerdao: "",
    affiliation: "",
    logoImage: "",
  });
  const hanldeLogoChange = (e) => {
    setImageUrl({
      ...imageUrl,
      logoImage: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleRegisterImageChange = (e) => {
    setImageUrl({
      ...imageUrl,
      registerdao: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleAffiliationImageChange = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]));
    setImageUrl({
      ...imageUrl,
      affiliation: URL.createObjectURL(e.target.files[0]),
    });
  };
  return (
    <div className="registerasngo-container">
      <div className="registerasngo-container__content">
        <div className="registerasngo-container__content-header">
          <p className="registerasngo-header">Sign Up</p>
          <p className="registerasngo-subheader">
            Please fill in this form to regsitera as a NGO
          </p>
        </div>
        <div className="registerasngo-container__content-body">
          <div className="registerasngo-logocontainer">
            <div className="ngologo-container">
              {imageUrl.logoImage ? (
                <img src={imageUrl.logoImage} alt={imageUrl.logoImage} />
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
          <div className="registerasngo-orgnamecontainer eachregister-field">
            <img
              src={organization}
              alt="organization"
              className="register-icon"
            ></img>
            <InputField
              placeholder="Organization Name"
              type="text"
              size="large"
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="registerasngo-orgaddresscontainer eachregister-field">
            <img
              src={address}
              alt="organization address"
              className="register-icon"
            ></img>
            <InputField
              placeholder="Organization Address"
              type="text"
              size="large"
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="registerasngo-orgemailcontainer eachregister-field">
            <img
              src={email}
              alt="organization email"
              className="register-icon"
            ></img>
            <InputField
              placeholder="Organization Email"
              type="text"
              size="large"
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="registerasngo-orgcausecontainer eachregister-field">
            <RadioGroupField></RadioGroupField>
            <img src={error} alt="user" className="register-icon"></img>
          </div>
          <div className="registerasngo-orgfoundercontainer eachregister-field">
            <img src={user} alt="user" className="register-icon"></img>
            <InputField
              placeholder="Founders Name"
              type="text"
              size="large"
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="registerasngo-orgfoundercontactcontainer eachregister-field">
            <img
              src={phone}
              alt="founder phone"
              className="register-icon"
            ></img>
            <InputField
              placeholder="Founders Contact"
              type="text"
              size="large"
            ></InputField>
            <img src={error} alt="Error" className="register-icon"></img>
          </div>
          <div className="registerasngo-orgdocumentcontainer eachregister-field">
            <img src={document} alt="Document" className="register-icon"></img>
            <div className="documents-container">
              <div className="documents-container__registerdao">
                <h3>Registration Certificate(DAO)</h3>
                <label>
                  <input
                    type="file"
                    accept="image/*"
                    name="myImage"
                    onChange={handleRegisterImageChange}
                  />
                  Upload Image
                </label>
                {imageUrl.registerdao && (
                  <img
                    src={imageUrl.registerdao}
                    alt={imageUrl.registerdao}
                  ></img>
                )}
              </div>
              <div className="documents-container__affiliation">
                <h3>Affliiation Certificate</h3>
                <label>
                  <input
                    type="file"
                    name="myImage"
                    onChange={handleAffiliationImageChange}
                  />
                  Upload Image
                </label>
                {imageUrl.affiliation && (
                  <img
                    src={imageUrl.affiliation}
                    alt={imageUrl.affiliation}
                  ></img>
                )}
              </div>
            </div>

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
          <div className="register-container__content-footer">
            <Button
              size="large-60"
              type="rectangle"
              label="Sign up"
              variant="outlined-primary-rectangle"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerasngo;
