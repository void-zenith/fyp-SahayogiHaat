import React from "react";
import avatar from "../../Assets/Images/avatar.jpg";

const EachComment = () => {
  return (
    <div className="eachcomment">
      <div className="eachcomment-profilecontainer">
        <img className="commentprofile" src={avatar} alt="Donator Profile" />
      </div>
      <div className="eachcomment-comment">
        <div className="eachcomment-comment__name">
          <p>Zenith Rajbhandari</p>
        </div>
        <div className="eachcomment-comment__date">
          <p>2021/12/1</p>
        </div>
        <div className="eachcomment-comment__comment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            laboriosam praesentium illum porro officia. Illum blanditiis minus
            soluta officiis facilis nulla odit atque itaque repellendus, eos
            tenetur vero nisi enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachComment;
