import React from "react";
import Button from "../Components/Buttons";
import EachComment from "./EachComment";
const CommentsTab = () => {
  return (
    <div className="commenttab-container">
      <form className="commenttab-container__form">
        <textarea
          className="comment-textarea"
          style={{ resize: "none" }}
          placeholder="Post a comment"
        ></textarea>
      </form>
      <div className="commenttab-container__buttons">
        <Button
          label="Clear"
          type="rectangle"
          size="x-small"
          variant="danger"
        ></Button>
        <Button
          label="Post"
          type="rectangle"
          size="x-small"
          variant="primary"
        ></Button>
      </div>
      <EachComment></EachComment>
      <EachComment></EachComment>
      <EachComment></EachComment>
      <EachComment></EachComment>
    </div>
  );
};
export default CommentsTab;
