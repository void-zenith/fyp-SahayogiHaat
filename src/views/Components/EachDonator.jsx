import React from "react";
import avatar from "../../Assets/Images/avatar.jpg";
const EachDonator = () => {
  return (
    <div className="eachdonator">
      <div className="eachdonator-profilecontainer">
        <img className="donatorprofile" src={avatar} alt="Donator Profile" />
      </div>
      <div className="eachdonator-message">
        <div className="eachdonator-message__name">
          <p>Zenith Rajbhandari</p>
        </div>
        <div className="eachdonator-message__date">
          <p>2021/12/1</p>
        </div>
        <div className="eachdonator-message__message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            laboriosam praesentium illum porro officia. Illum blanditiis minus
            soluta officiis facilis nulla odit atque itaque repellendus, eos
            tenetur vero nisi enim.
          </p>
        </div>
      </div>
      <div className="eachdonator-amountdonated">
        <p>Rs 2011212</p>
      </div>
    </div>
  );
};

export default EachDonator;
