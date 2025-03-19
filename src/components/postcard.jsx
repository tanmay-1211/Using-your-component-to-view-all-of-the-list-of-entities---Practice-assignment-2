import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <img
          src={post.profilePic}
          alt="Profile"
          style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
        />
        <h3>{post.username}</h3>
      </div>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;